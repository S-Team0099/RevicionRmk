/* =============================================================
   MOVISTAR PLANES – JS PRINCIPAL
   =============================================================
   Diferenciado por contexto:
   - Código común (Modales, Observers, Búsqueda)
   - Código Desktop-only
   - Código Mobile-only (≤768px)

   Objetivos Mobile:
   - Mostrar solo Plan 39.90 Adicional al cargar (cuando no hay búsqueda)
   - Carrusel horizontal táctil con separación entre tarjetas
   - Snap automático: al soltar scroll, se centra la tarjeta más cercana
   - Al filtrar: mostrar coincidencias en horizontal (no vertical)

   Objetivos Desktop:
   - Carrusel con flechas y drag con mouse
   - Mostrar todas las tarjetas siempre (la búsqueda solo oculta/filtra)

   Requisitos HTML:
   • Cada tarjeta:  <div class="box" data-nombre="..." data-precio="..." data-gigas="...">
   • Input búsqueda: <input id="planSearch" ...>
   • Mensaje sin resultados: <div id="noResultsMsg">...
   • Estructura: .slider-wrapper > .slider-container > .card-track > .box

   Nota: No dependemos de CSS para el comportamiento móvil; todo se corrige vía JS inline.
   ============================================================= */

/* =========================================================
 * CONFIG GLOBAL
 * --------------------------------------------------------- */
const MOBILE_MAX = 768;                                 // breakpoint móvil
const isMobile = () => window.innerWidth <= MOBILE_MAX; // helper
const isDesktop = () => !isMobile();                    // helper inverso

/* =========================================================
 * PLANES Y BENEFICIOS
 * --------------------------------------------------------- */

const planes = {
  /* Plan 29.90 */
  modal1: {
    nombre: "Plan Control 29.90",
    beneficios: [
      { titulo: "Internet", detalle: "10GB en alta velocidad" },
      { titulo: "Llamadas ilimitadas", detalle: "Min. nacionales Ilimitados + 300 min EE.UU. y Canadá" },
      { titulo: "Redes Sociales", detalle: "Facebook (Fotos), Instagram (Fotos), WhatsApp, Waze y Messenger (Full) x 12 meses" },
      { titulo: "Datos Iternacionales", detalle: "100MB zona (América y Europa) promocional por 12 meses" },
      { titulo: "SMS ilimitados", detalle: "A todos los destinos nacionales " },
      { titulo: "Promoción Porta", detalle: "Duplica tus beneficios x 3 meses" },
      { titulo: "Beneficio RMK", detalle: "Llevate un polo totalmente gratuito por realizar tu compra en uno de nuestros centros autorizados por Movistar" }
    ]
  },

  /* Plan 39.90 */
  modal2: {
    nombre: "Plan Control 39.90",
    beneficios: [
      { titulo: "Internet", detalle: "25GB en alta velocidad" },
      { titulo: "Llamadas ilimitadas", detalle: "Min. nacionales Ilimitados + 350 min EE.UU. y Canadá" },
      { titulo: "Redes Sociales", detalle: "Facebook (Fotos), Instagram (Fotos), WhatsApp, Waze y Messenger (Full) x 12 meses" },
      { titulo: "Datos Iternacionales", detalle: "1GB zona (América y Europa) promocional por 12 meses" },
      { titulo: "SMS ilimitados", detalle: "A todos los destinos nacionales " },
      { titulo: "Promoción Porta", detalle: "Duplica tus beneficios x 6 meses + 30GB para TIKTOK x 3 meses" },
      { titulo: "Beneficio RMK", detalle: "Llevate un polo totalmente gratuito por realizar tu compra en uno de nuestros centros autorizados por Movistar" }
    ]
  },

  /* Plan 39.90 Adicional */
  modal3: {
    nombre: "Plan Adicional 39.90",
    beneficios: [
      { titulo: "Internet", detalle: "120GB en alta velocidad" },
      { titulo: "Llamadas ilimitadas", detalle: "Min. nacionales Ilimitados + Min. Ilimitados EE.UU. y Canadá" },
      { titulo: "Redes Sociales", detalle: "Facebook , Instagram, WhatsApp, Waze y Messenger (Full) x 12 meses" },
      { titulo: "SMS ilimitados", detalle: "A todos los destinos nacionales " },
      { titulo: "Requisitos para el plan", detalle:"" },
      { titulo: "Cliente de planta", detalle: "Por ser cliente de Movistar, llévate una línea adicional con los beneficios del plan regular S/79.90, la cual incluye una mayor cantidad de GB y Apps Ilimitadas a solo S/39.90 " },
      { titulo: "Cliente nuevo", detalle: "Podrás gozar de estos beneficios si realizas 2 o más transacciones (Porta o Alta), contrantado la primera linea desde S/69.90" },
      { titulo: "Beneficios del plan", detalle: "Te ahorras más de S/480 al año" },
      { titulo: "Beneficio RMK", detalle: "Llevate un polo totalmente gratuito por realizar tu compra en uno de nuestros centros autorizados por Movistar" }
    ]
  },

  /* Plan 49.90 */
  modal4: {
    nombre: "Plan Control 49.90",
    beneficios: [
      { titulo: "Internet", detalle: "40GB en alta velocidad" },
      { titulo: "Llamadas ilimitadas", detalle: "Min. nacionales Ilimitados + 400 min EE.UU. y Canadá" },
      { titulo: "Redes Sociales", detalle: "Facebook (Fotos), Instagram (Fotos), WhatsApp, Waze y Messenger (Full) x 12 meses" },
      { titulo: "Datos Iternacionales", detalle: "1.5GB zona (América y Europa) promocional por 12 meses" },
      { titulo: "SMS ilimitados", detalle: "A todos los destinos nacionales " },
      { titulo: "Promoción Porta", detalle: "Duplica tus beneficios x 6 meses" },
      { titulo: "Beneficio RMK", detalle: "Llevate un polo totalmente gratuito por realizar tu compra en uno de nuestros centros autorizados por Movistar" }
    ]
  },

  /* Plan 59.90 */
  modal5: {
    nombre: "Plan Control 59.90",
    beneficios: [
      { titulo: "Internet", detalle: "75GB en alta velocidad" },
      { titulo: "Llamadas ilimitadas", detalle: "Min. nacionales Ilimitados + Min. Ilimitados EE.UU. y Canadá" },
      { titulo: "Redes Sociales", detalle: "Facebook , Instagram, WhatsApp, Waze y Messenger (Full) x 12 meses" },
      { titulo: "Datos Iternacionales", detalle: "2GB zona (América y Europa) promocional por 12 meses" },
      { titulo: "SMS ilimitados", detalle: "A todos los destinos nacionales " },
      { titulo: "Promoción Porta", detalle: "Duplica tus beneficios x 6 meses" },
      { titulo: "Beneficio RMK", detalle: "Llevate un polo totalmente gratuito por realizar tu compra en uno de nuestros centros autorizados por Movistar" }
    ]
  },

  /* Plan 69.90 */
  modal6: {
    nombre: "Plan Postpago 69.90",
    beneficios: [
      { titulo: "Internet", detalle: "100GB en alta velocidad" },
      { titulo: "Llamadas ilimitadas", detalle: "Min. nacionales Ilimitados + Min. Ilimitados EE.UU. y Canadá" },
      { titulo: "Redes Sociales", detalle: "Facebook , Instagram, WhatsApp, Waze y Messenger (Full) x 12 meses" },
      { titulo: "Datos Iternacionales", detalle: "3GB zona (América y Europa) promocional por 12 meses" },
      { titulo: "SMS ilimitados", detalle: "A todos los destinos nacionales " },
      { titulo: "Beneficio RMK", detalle: "Llevate un polo totalmente gratuito por realizar tu compra en uno de nuestros centros autorizados por Movistar" }
    ]
  },

  /* Plan 79.90 */
  modal7: {
    nombre: "Plan Postpago 79.90",
    beneficios: [
     { titulo: "Internet", detalle: "120GB en alta velocidad" },
      { titulo: "Llamadas ilimitadas", detalle: "Min. nacionales Ilimitados + Min. Ilimitados EE.UU. y Canadá" },
      { titulo: "Redes Sociales", detalle: "Facebook , Instagram, WhatsApp, Waze y Messenger (Full) x 12 meses" },
      { titulo: "Datos Iternacionales", detalle: "3GB zona (América y Europa) promocional por 12 meses" },
      { titulo: "SMS ilimitados", detalle: "A todos los destinos nacionales " },
      { titulo: "Promoción Porta", detalle: "50% Dsto. x 6 meses con opción a ampliar a 12 meses" },
      { titulo: "Beneficio RMK", detalle: "Llevate un polo totalmente gratuito por realizar tu compra en uno de nuestros centros autorizados por Movistar" }
    ]
  },

  /* Plan 99.90 */
  modal8: {
    nombre: "Plan Postpago 99.90",
    beneficios: [
     { titulo: "Internet", detalle: "135GB en alta velocidad" },
      { titulo: "Llamadas ilimitadas", detalle: "Min. nacionales Ilimitados + Min. Ilimitados EE.UU. y Canadá" },
      { titulo: "Redes Sociales", detalle: "Facebook , Instagram, WhatsApp, Waze y Messenger (Full) x 12 meses" },
      { titulo: "Datos Iternacionales", detalle: "5GB zona (América y Europa) promocional por 12 meses" },
      { titulo: "SMS ilimitados", detalle: "A todos los destinos nacionales " },
      { titulo: "Promoción Porta", detalle: "50% Dsto. x 6 meses con opción a ampliar a 12 meses" },
      { titulo: "Beneficio RMK", detalle: "Llevate un polo totalmente gratuito por realizar tu compra en uno de nuestros centros autorizados por Movistar" }
    ]
  }
};

  /* =========================================================
   * RENDER MODAL
   * --------------------------------------------------------- */
  function renderModal(id) {
    const modal = document.getElementById(id);
const content = modal.querySelector('.modal-body');
const title = modal.querySelector('h3');
const plan = planes[id];
if (!modal || !content || !plan) return;

title.textContent = plan.nombre;
content.innerHTML = `
    <ul>
      ${plan.beneficios.map(b => `<li><strong>${b.titulo}:</strong> ${b.detalle}</li>`).join('')}
    </ul>
  `;
}

/* =========================================================
 * MODALES – ABRIR Y CERRAR
 * ========================================================= */
function renderModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  const content = modal.querySelector(".modal-body");
  const title = modal.querySelector("h3");
  const plan = planes[id];
  if (!plan || !content) return;

  title.textContent = plan.nombre;
  content.innerHTML = `
    <ul>
      ${plan.beneficios.map(b => `<li><strong>${b.titulo}:</strong> ${b.detalle}</li>`).join('')}
    </ul>
  `;
}

function openModal(id) {
  renderModal(id);
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}

document.addEventListener("DOMContentLoaded", () => {
  // Abrir modal
  document.querySelectorAll("[data-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      openModal(btn.getAttribute("data-modal"));
    });
  });

  // Botón X y botón Entendido
  document.querySelectorAll(".modal .close, .modal .btn-entendido").forEach(el => {
    el.addEventListener("click", () => {
      const modal = el.closest(".modal");
      if (modal?.id) closeModal(modal.id);
    });
  });

  // Clic fuera del modal
  window.addEventListener("click", (e) => {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
      if (e.target === modal) closeModal(modal.id);
    });
  });

  // Cerrar con tecla ESC
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal").forEach(m => {
        if (m.style.display !== "none") closeModal(m.id);
      });
    }
  });
});


/* =========================================================
 * DOM READY
 * --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  /* ----------------------------------------------
   * REFERENCIAS BÁSICAS
   * ---------------------------------------------- */
  const wrapper = document.querySelector(".slider-wrapper");
  const slider = wrapper?.querySelector(".slider-container") || null;
  const track = slider?.querySelector(".card-track") || null;
  const cards = track ? Array.from(track.querySelectorAll(".box")) : [];
  const searchInput = document.getElementById("planSearch");
  const noResultsMsg = document.getElementById("noResultsMsg");
  const prevBtn = wrapper?.querySelector(".arrow.prev") || null;
  const nextBtn = wrapper?.querySelector(".arrow.next") || null;

  /* ----------------------------------------------
   * DEFENSIVE EARLY EXIT
   * ---------------------------------------------- */
  if (!slider || !track || !cards.length) {
    console.warn("[Planes JS] No se encontraron elementos base.");
    return;
  }

  /* ======================================================
   * ANIMACIÓN DE APARICIÓN (.visible) (COMÚN)
   * ------------------------------------------------------ */
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle("visible", entry.isIntersecting));
    }, { threshold: 0.5 });
    cards.forEach((c) => observer.observe(c));
  }

  /* ======================================================
   * DESKTOP-ONLY: Flechas + Drag con mouse
   * ------------------------------------------------------ */
  function setupDesktopSlider() {
    if (!isDesktop()) return; // se ejecuta solo si estamos en desktop ahora

    // Mostrar flechas (por si CSS no las oculta en móvil; igual se ocultan en CSS normalmente)
    if (prevBtn) prevBtn.style.display = "";
    if (nextBtn) nextBtn.style.display = "";

    const gap = parseInt(getComputedStyle(track).gap) || 0; // gap definido en CSS desktop
    const firstCard = cards[0];
    const cardWidth = firstCard.offsetWidth + gap;

    function updateArrows() {
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      if (prevBtn) prevBtn.disabled = slider.scrollLeft <= 0;
      if (nextBtn) nextBtn.disabled = slider.scrollLeft >= maxScroll - 1;
      [prevBtn, nextBtn].forEach((btn) => btn?.classList.toggle("disabled", !!btn?.disabled));
    }

    nextBtn?.addEventListener("click", () => slider.scrollBy({ left: cardWidth, behavior: "smooth" }));
    prevBtn?.addEventListener("click", () => slider.scrollBy({ left: -cardWidth, behavior: "smooth" }));

    slider.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    updateArrows();

    // Drag con mouse (ignorar touch)
    let isDragging = false, startX = 0, startScroll = 0;
    slider.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "touch") return; // móvil: scroll nativo
      if (e.target.closest("button, a, [data-modal]")) return; // no drag sobre controles
      isDragging = true;
      slider.classList.add("active");
      startX = e.clientX;
      startScroll = slider.scrollLeft;
      slider.setPointerCapture(e.pointerId);
    });
    slider.addEventListener("pointermove", (e) => {
      if (!isDragging) return;
      slider.scrollLeft = startScroll - (e.clientX - startX);
    });
    const endDrag = (e) => {
      if (!isDragging) return;
      isDragging = false;
      slider.classList.remove("active");
      try { slider.releasePointerCapture(e.pointerId); } catch { }
    };
    slider.addEventListener("pointerup", endDrag);
    slider.addEventListener("pointercancel", endDrag);
  }

  /* ======================================================
   * MOBILE-ONLY: Espaciado + Snap + Mostrar solo 39.90 Adicional
   * ------------------------------------------------------ */
  const MOBILE_CARD_GAP_PX = 16;            // separación visual entre tarjetas en móvil
  const MOBILE_CARD_WIDTH_VW = 88;          // % del viewport para cada tarjeta (dejar ver borde siguiente)

  // Ajusta estilos inline para carrusel móvil
  function applyMobileLayoutStyles() {
    if (!isMobile()) return;

    // Ocultar flechas si siguen visibles
    if (prevBtn) prevBtn.style.display = "none";
    if (nextBtn) nextBtn.style.display = "none";

    // Habilitar scroll horizontal táctil
    slider.style.overflowX = "auto";
    slider.style.scrollBehavior = "smooth"; // suavizado
    slider.style.webkitOverflowScrolling = "touch";

    // Track como fila flexible sin auto-centering
    track.style.display = "flex";
    track.style.width = "max-content"; // ancho se adapta a contenido visible
    track.style.gap = MOBILE_CARD_GAP_PX + "px"; // separación
    track.style.transform = "none";    // sin translateX manual
    track.style.justifyContent = "flex-start";

    // Ajustar cada tarjeta
    cards.forEach((card) => {
      card.style.flex = "0 0 auto";                      // tamaño contenido
      card.style.width = MOBILE_CARD_WIDTH_VW + "vw";     // ancho relativo
      card.style.maxWidth = "420px";                      // respeta tu tope
      card.style.margin = "0";                            // evita centrado auto
      card.style.scrollSnapAlign = "center";              // centro
    });

    // Activar snap via JS (CSS fallback es variable entre navegadores)
    enableMobileSnap();
  }

  // Mostrar solo Plan 39.90 Adicional en móvil, todos en desktop
  function showDefaultMobilePlan() {
    if (isDesktop()) {
      cards.forEach((c) => (c.style.display = ""));
      return;
    }
    let shownCard = null;
    cards.forEach((card) => {
      const precio = card.dataset.precio;
      const nombre = (card.dataset.nombre || "").toLowerCase();
      const keep = precio === "39.90" && nombre.includes("adicional");
      card.style.display = keep ? "" : "none";
      if (keep) shownCard = card;
    });
    // centrar la tarjeta mostrada
    centerCard(shownCard);
  }

  // Snap automático al detener scroll (usa distancia al centro)
  function enableMobileSnap() {
    if (!isMobile()) return;
    let snapTimer;
    slider.addEventListener("scroll", () => {
      clearTimeout(snapTimer);
      snapTimer = setTimeout(() => {
        const visibleCards = cards.filter(c => c.style.display !== "none");
        if (!visibleCards.length) return;
        // Punto medio del slider visible
        const sliderMid = slider.scrollLeft + slider.clientWidth / 2;
        let closest = visibleCards[0];
        let minDist = Infinity;
        visibleCards.forEach(card => {
          const cardMid = card.offsetLeft + card.offsetWidth / 2;
          const dist = Math.abs(cardMid - sliderMid);
          if (dist < minDist) { minDist = dist; closest = card; }
        });
        centerCard(closest, true);
      }, 80); // ms después de scroll (inercia)
    }, { passive: true });
  }

  // Centrar tarjeta dentro del slider
  function centerCard(card, smooth = false) {
    if (!card || !slider) return;
    const targetLeft = card.offsetLeft - (slider.clientWidth - card.offsetWidth) / 2;
    slider.scrollTo({ left: targetLeft, behavior: smooth ? "smooth" : "auto" });
  }

  /* ======================================================
   * BÚSQUEDA COMÚN (afecta a ambas vistas)
   * ------------------------------------------------------ */
  function handleSearchInput() {
    const raw = searchInput.value.trim();
    const q = raw.toLowerCase().replace(/\s+/g, "");
    let matches = 0;

    if (!q) {
      // sin texto => estado inicial según modo
      showDefaultMobilePlan();
      if (noResultsMsg) noResultsMsg.style.display = "none";
      return;
    }

    cards.forEach((card) => {
      const nombre = (card.dataset.nombre || "").toLowerCase().replace(/\s+/g, "");
      const precio = (card.dataset.precio || "").toLowerCase();
      const gigas = (card.dataset.gigas || "").toLowerCase().replace(/\s+/g, "");
      const texto = card.textContent.toLowerCase().replace(/\s+/g, "");
      const hit = nombre.includes(q) || precio.includes(q) || gigas.includes(q) || texto.includes(q);
      card.style.display = hit ? "" : "none";
      if (hit) matches++;
    });

    if (noResultsMsg) noResultsMsg.style.display = matches === 0 ? "block" : "none";

    // Si hay resultados y estamos en móvil, centrar la primera tarjeta visible
    if (matches > 0 && isMobile()) {
      const firstVisible = cards.find((c) => c.style.display !== "none");
      centerCard(firstVisible, true);
    }
  }

  /* ======================================================
   * MODAL TRIGGERS (COMÚN)
   * ------------------------------------------------------ */
  document.querySelectorAll("[data-modal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-modal");
      if (modalId) openModal(modalId);
    });
  });
  document.querySelectorAll(".modal .close, .modal .btn-entendido").forEach((el) => {
    el.addEventListener("click", () => {
      const modal = el.closest(".modal");
      if (modal?.id) closeModal(modal.id);
    });
  });

  /* ======================================================
   * INIT SECUENCIA
   * ------------------------------------------------------ */
  // 1. Configura layout según contexto actual
  if (isDesktop()) {
    setupDesktopSlider();
  } else {
    applyMobileLayoutStyles();
  }

  // 2. Estado inicial de tarjetas
  showDefaultMobilePlan();

  // 3. Listener de búsqueda
  if (searchInput) searchInput.addEventListener("input", handleSearchInput);

  // 4. Reaccionar a cambios de tamaño (rotación, resize)
  window.addEventListener("resize", () => {
    // Reaplicar layout
    if (isDesktop()) {
      // limpiar estilos móviles antes de desktop re-calc (opcional)
      track.style.gap = ""; // usa gap CSS desktop
      cards.forEach((c) => {
        c.style.width = "";
        c.style.maxWidth = "";
        c.style.margin = "";
        c.style.flex = "";
        c.style.scrollSnapAlign = "";
      });
      setupDesktopSlider();
      // En desktop mostramos todas si no hay búsqueda activa
      if (!searchInput?.value.trim()) {
        cards.forEach((c) => (c.style.display = ""));
        if (noResultsMsg) noResultsMsg.style.display = "none";
      } else {
        handleSearchInput();
      }
    } else {
      applyMobileLayoutStyles();
      // Reaplica estado según búsqueda o default
      if (searchInput?.value.trim()) handleSearchInput();
      else showDefaultMobilePlan();
    }
  });
});

/* =============================================================
 * FIN DEL SCRIPT
 * ============================================================= */
