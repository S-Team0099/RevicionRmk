const ciclos = [
  { dia: 1, activacion: "Día 01 del mes", beneficio: "03 de cada mes", pago: "Del 13 al 21 de cada mes" },
  { dia: 2, activacion: "Día 02 del mes", beneficio: "03 de cada mes", pago: "Del 13 al 21 de cada mes" },
  { dia: 3, activacion: "Día 03 del mes", beneficio: "04 de cada mes", pago: "Del 14 al 22 de cada mes" },
  { dia: 4, activacion: "Día 04 del mes", beneficio: "05 de cada mes", pago: "Del 15 al 23 de cada mes" },
  { dia: 5, activacion: "Día 05 del mes", beneficio: "06 de cada mes", pago: "Del 16 al 24 de cada mes" },
  { dia: 6, activacion: "Día 06 del mes", beneficio: "08 de cada mes", pago: "Del 18 al 26 de cada mes" },
  { dia: 7, activacion: "Día 07 del mes", beneficio: "08 de cada mes", pago: "Del 18 al 26 de cada mes" },
  { dia: 8, activacion: "Día 08 del mes", beneficio: "09 de cada mes", pago: "Del 19 al 27 de cada mes" },
  { dia: 9, activacion: "Día 09 del mes", beneficio: "10 de cada mes", pago: "Del 20 al 28 de cada mes" },
  { dia: 10, activacion: "Día 10 del mes", beneficio: "11 de cada mes", pago: "Del 21 al 29 de cada mes" },
  { dia: 11, activacion: "Día 11 del mes", beneficio: "12 de cada mes", pago: "Del 22 al 30 de cada mes" },
  { dia: 12, activacion: "Día 12 del mes", beneficio: "14 de cada mes", pago: "Del 24 al 01 de cada mes" },
  { dia: 13, activacion: "Día 13 del mes", beneficio: "14 de cada mes", pago: "Del 24 al 01 de cada mes" },
  { dia: 14, activacion: "Día 14 del mes", beneficio: "16 de cada mes", pago: "Del 26 al 03 de cada mes" },
  { dia: 15, activacion: "Día 15 del mes", beneficio: "16 de cada mes", pago: "Del 26 al 03 de cada mes" },
  { dia: 16, activacion: "Día 16 del mes", beneficio: "18 de cada mes", pago: "Del 28 al 05 de cada mes" },
  { dia: 17, activacion: "Día 17 del mes", beneficio: "18 de cada mes", pago: "Del 28 al 05 de cada mes" },
  { dia: 18, activacion: "Día 18 del mes", beneficio: "19 de cada mes", pago: "Del 29 al 06 de cada mes" },
  { dia: 19, activacion: "Día 19 del mes", beneficio: "20 de cada mes", pago: "Del 30 al 08 de cada mes" },
  { dia: 20, activacion: "Día 20 del mes", beneficio: "22 de cada mes", pago: "Del 02 al 10 de cada mes" },
  { dia: 21, activacion: "Día 21 del mes", beneficio: "22 de cada mes", pago: "Del 02 al 10 de cada mes" },
  { dia: 22, activacion: "Día 22 del mes", beneficio: "24 de cada mes", pago: "Del 04 al 12 de cada mes" },
  { dia: 23, activacion: "Día 23 del mes", beneficio: "24 de cada mes", pago: "Del 04 al 12 de cada mes" },
  { dia: 24, activacion: "Día 24 del mes", beneficio: "25 de cada mes", pago: "Del 05 al 13 de cada mes" },
  { dia: 25, activacion: "Día 25 del mes", beneficio: "26 de cada mes", pago: "Del 06 al 14 de cada mes" },
  { dia: 26, activacion: "Día 26 del mes", beneficio: "28 de cada mes", pago: "Del 08 al 16 de cada mes" },
  { dia: 27, activacion: "Día 27 del mes", beneficio: "28 de cada mes", pago: "Del 08 al 16 de cada mes" },
  { dia: 28, activacion: "Día 28 del mes", beneficio: "01 de cada mes", pago: "Del 10 al 19 de cada mes" },
  { dia: 29, activacion: "Día 29 del mes", beneficio: "01 de cada mes", pago: "Del 10 al 19 de cada mes" },
  { dia: 30, activacion: "Día 30 del mes", beneficio: "01 de cada mes", pago: "Del 10 al 19 de cada mes" },
  { dia: 31, activacion: "Día 31 del mes", beneficio: "01 de cada mes", pago: "Del 10 al 19 de cada mes" },

];

// Elementos del DOM
const tablaBody = document.getElementById("tabla-ciclos");
const inputDia = document.getElementById("buscador");
const contenedorResultado = document.getElementById("result-container");
const mensajeError = document.getElementById("mensaje-error");

function limpiarResultados() {
  tablaBody.innerHTML = "";
  contenedorResultado.style.display = "none";
  mensajeError.style.display = "none";
}

function mostrarError(mensaje = "⚠️ Por favor, ingrese una fecha válida.") {
  mensajeError.textContent = mensaje;
  mensajeError.style.display = "block";
}

function renderTabla(valorInput) {
  limpiarResultados();

  const dia = parseInt(valorInput.trim(), 10);
  if (valorInput.trim() === "") return;

  if (!/^[0-9]+$/.test(valorInput.trim()) || isNaN(dia) || dia < 1 || dia > 31) {
    mostrarError();
    return;
  }

  const ciclo = ciclos.find(item => item.dia === dia);
  if (!ciclo) {
    mostrarError("⚠️ No se encontró información para este día.");
    return;
  }

  const fila = document.createElement("tr");
  fila.classList.add("highlight");
  fila.innerHTML = `
    <td data-label="Fecha de activación">${ciclo.activacion}</td>
    <td data-label="Ciclo (entrega de saldo)">${ciclo.beneficio}</td>
    <td data-label="Fecha de pago">${ciclo.pago}</td>
  `;
  tablaBody.appendChild(fila);
  contenedorResultado.style.display = "block";
}

// Eventos
inputDia.addEventListener("input", e => renderTabla(e.target.value));
inputDia.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    renderTabla(e.target.value);
  }
});
document.getElementById('buscador').addEventListener('focus', () => {
  setTimeout(() => window.scrollTo(0, 0), 300);
});
