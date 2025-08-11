// /movistar/script.js

document.addEventListener('DOMContentLoaded', () => {
  const tarjetas = document.querySelectorAll('.tarjeta');

  tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('mouseenter', () => {
      tarjeta.classList.add('active-card');
    });

    tarjeta.addEventListener('mouseleave', () => {
      tarjeta.classList.remove('active-card');
    });
  });
});
