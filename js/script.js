document.addEventListener("DOMContentLoaded", () => {
  const fechaElemento = document.getElementById("fecha-actual");
  const horaElemento = document.getElementById("hora-actual");

  function mostrarFecha() {
    const fechaHoy = new Date();
    const anchoPantalla = window.innerWidth;

    if (anchoPantalla < 600) {
      fechaElemento.textContent = fechaHoy.toLocaleDateString('es-PE'); // Ej: 26/07/2025
    } else {
      const opciones = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      fechaElemento.textContent = `📅 ${fechaHoy.toLocaleDateString('es-PE', opciones)}`;
    }
  }

  function actualizarHora() {
    const ahora = new Date();
    const hora = ahora.toLocaleTimeString('es-PE', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit' // si quieres mostrar segundos
    });
    horaElemento.textContent = `⏰ ${hora}`;
  }

  // Ejecutar inmediatamente
  mostrarFecha();
  actualizarHora();

  // Actualizar hora cada segundo (puedes cambiar a 60000 si prefieres cada minuto)
  setInterval(actualizarHora, 1000);

  // Cambiar formato de fecha si se cambia tamaño de pantalla
  window.addEventListener('resize', mostrarFecha);
});
