// script.js

// 1. Evitar envío real del formulario (solo para demo)
document.querySelector('form').addEventListener('submit', function(e) {
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
});

// 3. Smooth Scroll para anclajes
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
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