// main.js
document.addEventListener("DOMContentLoaded", () => {

  /* -------------------------------------------------
     1. REFERENCIAS A ELEMENTOS PRINCIPALES DEL DOM
  ---------------------------------------------------*/
  const modalidadSelect = document.getElementById("tipoModalidad");
  const planSelect = document.getElementById("plan");
  const operadorSelect = document.getElementById("operador");
  const tipoPortabilidadSelect = document.getElementById("tipoPortabilidad");
  const mensajeBienvenida = document.getElementById("mensaje-bienvenida");
  const form = document.getElementById("whatsappForm");

  /* Span dinámico para mostrar descuentos en línea */
  const spanDescuento = document.createElement("span");
  spanDescuento.id = "descuento-inline";
  spanDescuento.classList.add("descuento-box-inline");
  planSelect.insertAdjacentElement("afterend", spanDescuento);

  /* Guardar opciones originales de selects */
  const opcionesModalidadOriginal = Array.from(modalidadSelect.options);
  const opcionesOperadorOriginal = Array.from(operadorSelect.options);
  const opcionesTipoPortOriginal = Array.from(tipoPortabilidadSelect.options);
  const opcionesPlanOriginal = Array.from(planSelect.options);

  /* -------------------------------------------------
     2. CONFIGURACIÓN DE CAMPOS Y SECUENCIA
  ---------------------------------------------------*/
  const secuenciaCampos = [
    "dni", "nombre", "numero", "operador", "tipoPortabilidad",
    "plan", "correo", "iccid", "direccion"
  ];

  /* Mapear campos y sus inputs */
  const campos = {};
  const inputs = {};
  secuenciaCampos.forEach(name => {
    const input = document.querySelector(`[name="${name}"]`);
    if (input) {
      campos[name] = input.closest(".campo");
      inputs[name] = input;
    }
  });

  /* -------------------------------------------------
     3. FUNCIONES DE UTILIDAD
  ---------------------------------------------------*/

  // Mostrar alerta flotante o alert() si no existe overlay
  function mostrarAlerta(mensaje, duracion = 2200) {
    const overlay = document.getElementById("alertaOverlay");
    const mensajeElem = document.getElementById("alertaMensaje");
    if (!overlay || !mensajeElem) {
      alert(mensaje);
      return;
    }
    mensajeElem.textContent = mensaje;
    overlay.style.display = "flex";
    clearTimeout(mostrarAlerta._t);
    mostrarAlerta._t = setTimeout(() => overlay.style.display = "none", duracion);
  }

  // Saber si un campo está visible
  function isVisibleCampo(name) {
    return campos[name] && campos[name].style.display !== "none";
  }

  // Validar si un control tiene valor válido
  function isValidControl(control) {
    if (!control) return true; // inexistente = válido
    if (control.closest(".campo").style.display === "none") return true; // oculto = válido
    if (control.tagName === "SELECT") return control.value.trim() !== "";
    if (control.type === "email")
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(control.value.trim());
    return control.value.trim() !== "";
  }

  // Validar campos previos antes de acceder a otro
  function validarPreviosPara(nombreActual) {
    const idx = secuenciaCampos.indexOf(nombreActual);
    for (let i = 0; i < idx; i++) {
      const name = secuenciaCampos[i];
      const ctrl = inputs[name];
      if (isVisibleCampo(name) && !isValidControl(ctrl)) {
        return { ok: false, missingName: name, missingCtrl: ctrl };
      }
    }
    return { ok: true };
  }

  // Mostrar solo los campos pasados como argumento
  function mostrarCampos(...nombres) {
    Object.entries(campos).forEach(([clave, campo]) => {
      campo.style.display = nombres.includes(clave) ? "block" : "none";
    });
  }

  // Ocultar campos específicos
  function ocultarCampos(...nombres) {
    nombres.forEach(nombre => {
      if (campos[nombre]) campos[nombre].style.display = "none";
    });
  }

  // Actualizar visibilidad según modalidad
  function actualizarVisibilidadCampos() {
    const modalidad = modalidadSelect.value;
    if (!modalidad) {
      Object.values(campos).forEach(c => c.style.display = "none");
      spanDescuento.textContent = "";
      return;
    }
    if (modalidad === "Portabilidad Postpago") {
      mostrarCampos(...secuenciaCampos);
    } else if (modalidad === "Portabilidad Prepago") {
      mostrarCampos("dni", "nombre", "numero", "operador", "tipoPortabilidad", "correo", "iccid", "direccion");
      ocultarCampos("plan");
      spanDescuento.textContent = "";
    } else if (modalidad === "Alta Postpago") {
      mostrarCampos("dni", "nombre", "plan", "correo", "iccid", "direccion");
      ocultarCampos("numero", "operador", "tipoPortabilidad");
    }
  }

  // Filtrar tipo de portabilidad según modalidad
  function filtrarTipoPortabilidad() {
    const modalidad = modalidadSelect.value;
    tipoPortabilidadSelect.innerHTML = "";
    const permitidas = opcionesTipoPortOriginal.filter(opt => {
      if (opt.value === "") return true;
      if (modalidad === "Portabilidad Postpago")
        return ["Postpago a Postpago", "Prepago a Postpago"].includes(opt.value);
      if (modalidad === "Portabilidad Prepago")
        return ["Postpago a Prepago", "Prepago a Prepago"].includes(opt.value);
      return false;
    });
    permitidas.forEach(o => tipoPortabilidadSelect.appendChild(o.cloneNode(true)));
  }

  // Obtener mensaje de descuento
  function obtenerMensajeDescuento(modalidad, plan) {
    if (modalidad === "Portabilidad Postpago") {
      if (plan === 69.90) return "50% de Dto. x 6 meses";
      if (plan >= 79.90) return "50% de Dto. x 12 meses";
    }
    return "";
  }

  // Actualizar mensaje de descuento
  function actualizarDescuento() {
    const modalidad = modalidadSelect.value;
    const planValor = parseFloat(planSelect.value);
    if (isNaN(planValor) || (modalidad !== "Portabilidad Postpago" && modalidad !== "Alta Postpago")) {
      spanDescuento.textContent = "";
      return;
    }
    spanDescuento.textContent = obtenerMensajeDescuento(modalidad, planValor);
  }

  // Ocultar opción seleccionada en un select
  function ocultarOpcionSeleccionada(select) {
    Array.from(select.options).forEach(opt => opt.hidden = false);
    if (select.value) {
      const sel = Array.from(select.options).find(o => o.value === select.value);
      if (sel) sel.hidden = true;
    }
  }

  /* -------------------------------------------------
     4. EVENTOS
  ---------------------------------------------------*/

  modalidadSelect.addEventListener("change", () => {
    if (modalidadSelect.value !== "") mensajeBienvenida.style.display = "none";
    filtrarTipoPortabilidad();
    actualizarVisibilidadCampos();
    actualizarDescuento();
    ocultarOpcionSeleccionada(modalidadSelect);
    ocultarOpcionSeleccionada(tipoPortabilidadSelect);
  });

  operadorSelect.addEventListener("change", () => {
    actualizarVisibilidadCampos();
    actualizarDescuento();
    ocultarOpcionSeleccionada(operadorSelect);
  });

  planSelect.addEventListener("change", () => {
    actualizarDescuento();
    ocultarOpcionSeleccionada(planSelect);
  });

  // Validación progresiva al intentar escribir en campos posteriores
  form.addEventListener("pointerdown", (ev) => {
    const targetControl = ev.target.closest("input, select, textarea, button");
    if (!targetControl || targetControl.type === "submit") return;
    const name = targetControl.getAttribute("name");
    if (!name || !secuenciaCampos.includes(name)) return;
    const res = validarPreviosPara(name);
    if (!res.ok) {
      ev.preventDefault();
      res.missingCtrl?.focus();
      mostrarAlerta(`Por favor complete el campo "${res.missingName.toUpperCase()}" antes de continuar.`);
    }
  }, { capture: true });

  // Envío del formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validar todos los campos visibles
    for (let name of secuenciaCampos) {
      const campo = inputs[name];
      if (campo && !isValidControl(campo)) {
        mostrarAlerta(`El campo "${name.toUpperCase()}" es obligatorio.`);
        campo.focus();
        return;
      }
    }

    // Construir mensaje de WhatsApp
    const modalidad = modalidadSelect.value;
    const descuento = obtenerMensajeDescuento(modalidad, parseFloat(planSelect.value));
    let mensaje =
      `*Modalidad:* ${modalidad}
*DNI:* ${inputs.dni.value}
*Nombre Completo del Cliente:* ${inputs.nombre.value}
${inputs.numero?.value ? `*Número de Celular:* ${inputs.numero.value}\n` : ""}${operadorSelect.value ? `*Operador Actual:* ${operadorSelect.value}\n` : ""}${tipoPortabilidadSelect.value ? `*Modalidad de Portabilidad:* ${tipoPortabilidadSelect.value}\n` : ""}${planSelect.value ? `*Plan a Contratar:* ${planSelect.value}${descuento ? ` (${descuento})` : ""}\n` : ""}*Correo Electrónico:* ${inputs.correo.value}
*ICCID:* ${inputs.iccid.value}
*Direccion Exacta del Cliente:* ${inputs.direccion.value}`;

    // Abrir WhatsApp
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  });

  /* -------------------------------------------------
     5. AJUSTES INICIALES
  ---------------------------------------------------*/

  // Si es móvil, mover botón "volver"
  if (window.innerWidth <= 768) {
    const volverBtn = document.querySelector(".boton-volver");
    if (form && volverBtn) {
      form.insertAdjacentElement("afterend", volverBtn);
    }
  }

  // Ocultar opción seleccionada en todos los selects importantes
  [modalidadSelect, tipoPortabilidadSelect, planSelect, operadorSelect].forEach(sel => {
    if (sel) ocultarOpcionSeleccionada(sel);
  });

  // Estado inicial
  filtrarTipoPortabilidad();
  actualizarVisibilidadCampos();
  actualizarDescuento();

});
