function login(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const users = JSON.parse(localStorage.getItem('evodentia_users') || '[]');
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem('evodentia_logged_user', JSON.stringify(user));
    window.location.href = 'home.html';
  } else {
    document.getElementById('message').textContent = '❌ Usuario o contraseña incorrectos.';
  }
}

function logout() {
  localStorage.removeItem('evodentia_logged_user');
  window.location.href = 'index.html';
}

function loadSection(section) {
  const content = document.getElementById('content');
  if (section === 'cursos') {
    content.innerHTML = `
      <h2>Próximos Cursos</h2>
      <div class="course-grid">
        <div class="course-card">BLENDER FOR DENTAL - 568€</div>
        <div class="course-card">EXOCAD - 978€</div>
        <div class="course-card">3SHAPE ORTHOANALYZER - 754€</div>
        <div class="course-card">NEMOTECH - 658€</div>
      </div>
    `;
  } else if (section === 'contacta') {
    content.innerHTML = `
      <h2>Contacto</h2>
      <p><strong>Joaquin</strong> - 628843941</p>
      <p><strong>Angie</strong> - 675319114</p>
      <p>Email: evodentia@gmail.com</p>
      <form class="contact-form" onsubmit="alert('Mensaje enviado'); return false;">
        <input type="text" placeholder="Tu nombre o título" required>
        <textarea placeholder="Tu mensaje" rows="4" required></textarea>
        <input type="email" placeholder="Tu email de contacto" required>
        <button type="submit">Enviar</button>
      </form>
    `;
  } else if (section === 'perfil') {
    const user = JSON.parse(localStorage.getItem('evodentia_logged_user'));
    content.innerHTML = `
      <h2>Mi Perfil</h2>
      <p>Nombre: ${user.name}</p>
      <div id="perfil-config">
        <label>Color de fondo:</label>
        <input type="color" onchange="document.body.style.backgroundColor = this.value">
        <label>Tamaño del texto:</label>
        <input type="range" min="14" max="32" onchange="document.body.style.fontSize = this.value + 'px'">
      </div>
    `;
  } else {
    content.innerHTML = `
      <h2>Bienvenido a Evodentia</h2>
      <p>Nos enfocamos en la calidad de las formaciones y mejora de la competitividad profesional.</p>
      <p>Impulsamos una bolsa de trabajo similar a Infojobs para el sector dental.</p>
      <p>Asesoramos a clínicas dentales para optimizar procesos y productividad.</p>
      <img src="https://images.unsplash.com/photo-1588776814546-d6677b3d7b0c?auto=format&fit=crop&w=987&q=80" width="100%">
      <img src="https://images.unsplash.com/photo-1592503254665-291051fe1d3b?auto=format&fit=crop&w=987&q=80" width="100%" style="margin-top:20px;">
    `;
  }
}

if (window.location.pathname.includes("home.html")) {
  const user = JSON.parse(localStorage.getItem('evodentia_logged_user'));
  if (!user) window.location.href = 'index.html';
  loadSection('inicio');
}
