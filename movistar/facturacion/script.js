const ciclos = [
  { dia: 1, ciclo: "5", activacion: "1", beneficio: "6 de cada mes", cierre: "5 de cada mes", pago: "Del 11 al 21" },
  { dia: 2, ciclo: "5", activacion: "2", beneficio: "6 de cada mes", cierre: "5 de cada mes", pago: "Del 11 al 21" },
  { dia: 3, ciclo: "5", activacion: "3", beneficio: "6 de cada mes", cierre: "5 de cada mes", pago: "Del 11 al 21" },
  { dia: 4, ciclo: "5", activacion: "4", beneficio: "6 de cada mes", cierre: "5 de cada mes", pago: "Del 11 al 21" },
  { dia: 5, ciclo: "5", activacion: "5", beneficio: "6 de cada mes", cierre: "5 de cada mes", pago: "Del 11 al 21" },
  { dia: 6, ciclo: "9", activacion: "6", beneficio: "10 de cada mes", cierre: "9 de cada mes", pago: "Del 16 al 25" },
  { dia: 7, ciclo: "9", activacion: "7", beneficio: "10 de cada mes", cierre: "9 de cada mes", pago: "Del 16 al 25" },
  { dia: 8, ciclo: "9", activacion: "8", beneficio: "10 de cada mes", cierre: "9 de cada mes", pago: "Del 16 al 25" },
  { dia: 9, ciclo: "9", activacion: "9", beneficio: "10 de cada mes", cierre: "9 de cada mes", pago: "Del 16 al 25" },
  { dia: 10, ciclo: "15", activacion: "10", beneficio: "16 de cada mes", cierre: "15 de cada mes", pago: "Del 19 al 01" },
  { dia: 11, ciclo: "15", activacion: "11", beneficio: "16 de cada mes", cierre: "15 de cada mes", pago: "Del 19 al 01" },
  { dia: 12, ciclo: "15", activacion: "12", beneficio: "16 de cada mes", cierre: "15 de cada mes", pago: "Del 19 al 01" },
  { dia: 13, ciclo: "15", activacion: "13", beneficio: "16 de cada mes", cierre: "15 de cada mes", pago: "Del 19 al 01" },
  { dia: 14, ciclo: "15", activacion: "14", beneficio: "16 de cada mes", cierre: "15 de cada mes", pago: "Del 19 al 01" },
  { dia: 15, ciclo: "15", activacion: "15", beneficio: "16 de cada mes", cierre: "15 de cada mes", pago: "Del 19 al 01" },
  { dia: 16, ciclo: "17", activacion: "16", beneficio: "18 de cada mes", cierre: "17 de cada mes", pago: "Del 20 al 05" },
  { dia: 17, ciclo: "17", activacion: "17", beneficio: "18 de cada mes", cierre: "17 de cada mes", pago: "Del 20 al 05" },
  { dia: 18, ciclo: "24", activacion: "18", beneficio: "24 de cada mes", cierre: "23 de cada mes", pago: "Del 27 al 09" },
  { dia: 19, ciclo: "14", activacion: "19", beneficio: "24 de cada mes", cierre: "23 de cada mes", pago: "Del 27 al 09" },
  { dia: 20, ciclo: "24", activacion: "20", beneficio: "24 de cada mes", cierre: "23 de cada mes", pago: "Del 27 al 09" },
  { dia: 21, ciclo: "24", activacion: "21", beneficio: "24 de cada mes", cierre: "23 de cada mes", pago: "Del 27 al 09" },
  { dia: 22, ciclo: "24", activacion: "22", beneficio: "24 de cada mes", cierre: "23 de cada mes", pago: "Del 27 al 09" },
  { dia: 23, ciclo: "24", activacion: "23", beneficio: "24 de cada mes", cierre: "23 de cada mes", pago: "Del 27 al 09" },
  { dia: 24, ciclo: "27", activacion: "24", beneficio: "28 de cada mes", cierre: "27 de cada mes", pago: "Del 03 al 13" },
  { dia: 25, ciclo: "27", activacion: "25", beneficio: "28 de cada mes", cierre: "27 de cada mes", pago: "Del 03 al 13" },
  { dia: 26, ciclo: "27", activacion: "26", beneficio: "28 de cada mes", cierre: "27 de cada mes", pago: "Del 03 al 13" },
  { dia: 27, ciclo: "27", activacion: "27", beneficio: "28 de cada mes", cierre: "27 de cada mes", pago: "Del 03 al 13" },
  { dia: 28, ciclo: "31", activacion: "28", beneficio: "01 de cada mes", cierre: "31 de cada mes", pago: "Del 05 al 17" },
  { dia: 29, ciclo: "31", activacion: "29", beneficio: "01 de cada mes", cierre: "31 de cada mes", pago: "Del 05 al 17" },
  { dia: 30, ciclo: "31", activacion: "30", beneficio: "01 de cada mes", cierre: "31 de cada mes", pago: "Del 05 al 17" },
  { dia: 31, ciclo: "31", activacion: "31", beneficio: "01 de cada mes", cierre: "31 de cada mes", pago: "Del 05 al 17" }
];

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
  if (valorInput.trim() === "") return; // No mostrar error si el campo está vacío

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
    <td data-label="Ciclo de facturación">${ciclo.ciclo}</td>
    <td data-label="Fecha de activación">${ciclo.activacion}</td>
    <td data-label="Entrega de beneficio">${ciclo.beneficio}</td>
    <td data-label="Cierre de ciclo">${ciclo.cierre}</td>
    <td data-label="Fecha de pago">${ciclo.pago}</td>
  `;
  tablaBody.appendChild(fila);
  contenedorResultado.style.display = "block";
}

inputDia.addEventListener("input", e => renderTabla(e.target.value));
inputDia.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    renderTabla(e.target.value);
  }
});
document.getElementById('buscador').addEventListener('focus', () => {
  setTimeout(() => window.scrollTo(0, 0), 300);
});
