// script.js

// 1. Evitar envío real del formulario (solo para demo)
document.querySelector('form')?.addEventListener('submit', function(e) {
  e.preventDefault(); // Evita el envío real
  alert('Gracias por tu mensaje. Nos pondremos en contacto contigo.');
});

// 2. Cargar Font Awesome si no está disponible (opcional)
document.addEventListener('DOMContentLoaded', function() {
  if (typeof FontAwesomeConfig === 'undefined') {
    const faScript = document.createElement('script');
    faScript.src = 'https://kit.fontawesome.com/8642987686.js';
    faScript.crossOrigin = 'anonymous';
    document.head.appendChild(faScript);
  }

  // Inicializar el menú desplegable después de que el DOM esté listo
  setupMobileMenu();
});

// 3. Funcionalidad del menú desplegable
function setupMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const menuList = document.getElementById('menu-list');

  if (!menuToggle || !menuList) {
    console.warn("No se encontraron elementos del menú. Asegúrate de que el HTML tenga #menu-toggle y #menu-list.");
    return;
  }

  // Alternar el menú al hacer clic en el botón
  menuToggle.addEventListener('click', function(e) {
    e.stopPropagation(); // Evita que el evento dispare el cierre inmediato
    menuList.classList.toggle('active');
  });

  // Cerrar el menú al hacer clic fuera
  document.addEventListener('click', function(e) {
    if (!menuToggle.contains(e.target) && !menuList.contains(e.target)) {
      menuList.classList.remove('active');
    }
  });

  // Cerrar el menú al hacer clic en un enlace
  menuList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuList.classList.remove('active');
    });
  });
}

// 4. Smooth Scroll para anclajes (ajustado para el nuevo menú)
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.menu-list a, nav ul a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});
