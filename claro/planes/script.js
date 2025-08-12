$(document).ready(function () {
  $('.modal').hide();

  $('.carousel').on('init', function () {
    $(this).css('opacity', 1);
  });

  $('.carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    dots: false,
    speed: 300,
    cssEase: 'ease-in-out',
    swipeToSlide: true,
    touchMove: true,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: false,
          variableWidth: false,
          infinite: false,
          adaptiveHeight: true
        }
      }
    ]
  });

  $(document).on('click', '.modal .close, .btn-entendido', function () {
    $(this).closest('.modal').fadeOut();
  });

  $(document).on('click', '.modal', function (e) {
    if ($(e.target).hasClass('modal')) {
      $(this).fadeOut();
    }
  });

  const buscador = $("#buscador");

  function filtrarPorPrecio(precio) {
    $('.carousel').slick('slickUnfilter');
    if (precio) {
      $('.carousel').slick('slickFilter', function (index, slide) {
        return $(slide).data('precio') === precio;
      });
    }
  }

  if (window.innerWidth <= 768) {
    filtrarPorPrecio("69.90");
  }

  buscador.on("input", function () {
    const valor = $(this).val().trim().replace(",", ".");
    filtrarPorPrecio(valor);
  });
});

$('.carousel').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: false,
  arrows: true,
  dots: false,
  speed: 300,
  cssEase: 'ease-in-out',
  swipeToSlide: true,
  touchMove: true,
  adaptiveHeight: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        arrows: false // ❌ quitar flechas también aquí
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
        centerMode: false,
        variableWidth: false,
        infinite: false,
        adaptiveHeight: true
      }
    }
  ]
});

// Cerrar modal con botón X o botón Entendido
$(document).on('click', '.modal .close, .btn-entendido', function () {
  $(this).closest('.modal').fadeOut();
});

// Cerrar modal haciendo clic fuera del contenido
$(document).on('click', '.modal', function (e) {
  if ($(e.target).hasClass('modal')) {
    $(this).fadeOut();
  }
});


const planes = {
  modal1: {
    nombre: "Max 29.90",
    beneficios: [
      { titulo: "10GB", detalle: "de internet." },
      { titulo: "Minutos ilimitadas", detalle: "A cualquier operador de Perú y 300 min. a LDI 3 (conformado por todos los teléfonos fijos y celularesde Estados Unidos 'Incluye Alaska y Hawái', Canadá, Puerto Rico, México, Chile y sólo los teléfonos fijos de Alemania y China)." },
      { titulo: "Claro video", detalle: "Sin consumir tus megas en 4G y 4.5G LTE por la App hasta el 15.08.25." },
      { titulo: "Claro música", detalle: "Resgístrate a Claro música gratuito y disfruta GRATIS de la música de tus artitas favoritos." },
      { titulo: "Paramount +", detalle: "Tienes una suscripción gratuita de 24 meses dentro de Claro video." },
      { titulo: "Redes soliciales", detalle: "Facebook Full, Instagram Video, Threads (3GB) y WhatsApp hasta el 30.06.25." },
      { titulo: "SMS ilimitado", detalle: "Para comunicarte a destinos nacionales." },
      { titulo: "Claro Club", detalle: "Disfruta por ser parte del programa de beneficios de Claro." },
      { titulo: "Cobertura internacional", detalle: "Usa parte de plan Max en 14 paises de Latinoamérica. Y ahora, usa el total de los gigas, minutos y sms de tu plan Max en Ecuador, Bolivia y Colombia." },
      { titulo: "Claro drive", detalle: "Cuentas con 25GB de almacenamiento gratuito." },
    ]
  },

  modal2: {
    nombre: "Max 39.90",
    beneficios: [
      { titulo: "25GB", detalle: "de internet." },
      { titulo: "Minutos ilimitadas", detalle: "A cualquier operador de Perú y 350 min. a LDI 3 (conformado por todos los teléfonos fijos y celularesde Estados Unidos 'Incluye Alaska y Hawái', Canadá, Puerto Rico, México, Chile y sólo los teléfonos fijos de Alemania y China)." },
      { titulo: "Claro video", detalle: "Sin consumir tus megas en 4G y 4.5G LTE por la App hasta el 15.08.25." },
      { titulo: "Claro música", detalle: "Resgístrate a Claro música gratuito y disfruta GRATIS de la música de tus artitas favoritos." },
      { titulo: "Paramount +", detalle: "Tienes una suscripción gratuita de 24 meses dentro de Claro video." },
      { titulo: "Redes soliciales", detalle: "Facebook Full, Instagram Video, Threads (5GB) Waze y WhatsApp hasta el 30.06.25." },
      { titulo: "SMS ilimitado", detalle: "Para comunicarte a destinos nacionales." },
      { titulo: "Claro Club", detalle: "Disfruta por ser parte del programa de beneficios de Claro." },
      { titulo: "Cobertura internacional", detalle: "Usa parte de plan Max en 14 paises de Latinoamérica. Y ahora, usa el total de los gigas, minutos y sms de tu plan Max en Ecuador, Bolivia y Colombia." },
      { titulo: "Claro drive", detalle: "Cuentas con 25GB de almacenamiento gratuito." },
    ]
  },


  modal3: {
    nombre: "Max 49.90",
    beneficios: [
      { titulo: "45GB", detalle: "de internet." },
      { titulo: "Minutos ilimitadas", detalle: "A cualquier operador de Perú y 300 min. a LDI 3 (conformado por todos los teléfonos fijos y celularesde Estados Unidos 'Incluye Alaska y Hawái', Canadá, Puerto Rico, México, Chile y sólo los teléfonos fijos de Alemania y China)." },
      { titulo: "Claro video", detalle: "Sin consumir tus megas en 4G y 4.5G LTE por la App hasta el 15.08.25." },
      { titulo: "Claro música", detalle: "Resgístrate a Claro música gratuito y disfruta GRATIS de la música de tus artitas favoritos." },
      { titulo: "Paramount +", detalle: "Tienes una suscripción gratuita de 24 meses dentro de Claro video." },
      { titulo: "Redes soliciales", detalle: "Waze, WhatsApp, FB Full, Instagram y Messenger Full por 12 meses." },
      { titulo: "SMS ilimitado", detalle: "Para comunicarte a destinos nacionales." },
      { titulo: "Claro Club", detalle: "Disfruta por ser parte del programa de beneficios de Claro." },
      { titulo: "Cobertura internacional", detalle: "Usa parte de plan Max en 14 paises de Latinoamérica. Y ahora, usa el total de los gigas, minutos y sms de tu plan Max en Ecuador, Bolivia y Colombia." },
      { titulo: "Claro drive", detalle: "Cuentas con 25GB de almacenamiento gratuito." },
    ]
  },

  modal4: {
    nombre: "Max 55.90",
    beneficios: [
      { titulo: "75GB", detalle: "de internet." },
      { titulo: "Minutos ilimitadas", detalle: "A cualquier operador de Perú y 300 min. a LDI 3 (conformado por todos los teléfonos fijos y celularesde Estados Unidos 'Incluye Alaska y Hawái', Canadá, Puerto Rico, México, Chile y sólo los teléfonos fijos de Alemania y China)." },
      { titulo: "Claro video", detalle: "Sin consumir tus megas en 4G y 4.5G LTE por la App hasta el 15.08.25." },
      { titulo: "Claro música", detalle: "Resgístrate a Claro música gratuito y disfruta GRATIS de la música de tus artitas favoritos." },
      { titulo: "Paramount +", detalle: "Tienes una suscripción gratuita de 24 meses dentro de Claro video." },
      { titulo: "Redes soliciales", detalle: "Waze, WhatsApp, FB Full, Instagram y Messenger Full por 12 meses." },
      { titulo: "SMS ilimitado", detalle: "Para comunicarte a destinos nacionales." },
      { titulo: "Claro Club", detalle: "Disfruta por ser parte del programa de beneficios de Claro." },
      { titulo: "Cobertura internacional", detalle: "Usa parte de plan Max en 14 paises de Latinoamérica. Y ahora, usa el total de los gigas, minutos y sms de tu plan Max en Ecuador, Bolivia y Colombia." },
      { titulo: "Claro drive", detalle: "Cuentas con 25GB de almacenamiento gratuito." },
    ]
  },

  modal5: {
    nombre: "Max Ilimitado 69.90",
    beneficios: [
      { titulo: "110GB", detalle: "de internet." },
      { titulo: "Datos ilimitadas a nivel nacional", detalle: "Los 110GB de tu plan te sriven para navegar en alta velocidad. ¿Y si se acaban?. Podrás seguir navegando solo que a una velocidad menor: La velocidad mínima de descargar será de 0.005Mbps en 2G y de 0.256Mbps en 3G, 4G y 4.5G." },
      { titulo: "Llamadas y SMS ilimitados", detalle: "a cualquier destino nacional." },
      { titulo: "Minutos ilimitados a destinos internacionales (LDI3)", detalle: "móviles y fijos en EE.UU (incluye Hawai y Alaska), Canadá, Puerto Rico, Chile y México así como fijos de Alemania y China." },
      { titulo: "Cobertura internacional", detalle: " Usa parte de tu plan Max en 14 países de LATAM + 3 de Zona Andina + EE.UU y Canadá. Y ahora, usa el total de los gigas, minutos y sms de tu plan Max en Ecuador, Bolivia y Colombia." },
      { titulo: "Claro video", detalle: "Tienes una suscripción gratuita de 24 meses en sección catalogo." },
      { titulo: "Paramount +", detalle: "Tienes una suscripción gratuita de 24 meses dentro de Claro video." },
      { titulo: "Claro Club", detalle: "Eres parte del programa del beneficios de Claro." },
      { titulo: "Claro música", detalle: "Resgístrate a Claro música gratuito y disfruta GRATIS de la música de tus artitas favoritos." },
      { titulo: "Claro drive", detalle: "Cuentas con 25GB de almacenamiento gratuito." },
    ]
  },

  modal6: {
    nombre: "Max Ilimitado 79.90",
    beneficios: [
      { titulo: "125GB", detalle: "de internet." },
      { titulo: "Datos ilimitadas a nivel nacional", detalle: "Los 125GB de tu plan te sriven para navegar en alta velocidad. ¿Y si se acaban?. Podrás seguir navegando solo que a una velocidad menor: La velocidad mínima de descargar será de 0.005Mbps en 2G y de 0.256Mbps en 3G, 4G y 4.5G." },
      { titulo: "Llamadas y SMS ilimitados", detalle: "a cualquier destino nacional." },
      { titulo: "Minutos ilimitados a destinos internacionales (LDI3)", detalle: "móviles y fijos en EE.UU (incluye Hawai y Alaska), Canadá, Puerto Rico, Chile y México así como fijos de Alemania y China." },
      { titulo: "Cobertura internacional", detalle: " Usa parte de tu plan Max en 14 países de LATAM + 3 de Zona Andina + EE.UU y Canadá. Y ahora, usa el total de los gigas, minutos y sms de tu plan Max en Ecuador, Bolivia y Colombia." },
      { titulo: "Claro video", detalle: "Tienes una suscripción gratuita de 24 meses en sección catalogo." },
      { titulo: "Paramount +", detalle: "Tienes una suscripción gratuita de 24 meses dentro de Claro video." },
      { titulo: "Claro Club", detalle: "Eres parte del programa del beneficios de Claro." },
      { titulo: "Claro música", detalle: "Resgístrate a Claro música gratuito y disfruta GRATIS de la música de tus artitas favoritos." },
      { titulo: "Claro drive", detalle: "Cuentas con 25GB de almacenamiento gratuito." },
    ]
  },

  modal7: {
    nombre: "Max Ilimitado 95.90",
    beneficios: [
      { titulo: "135GB", detalle: "de internet." },
      { titulo: "Datos ilimitadas a nivel nacional", detalle: "Los 135GB de tu plan te sriven para navegar en alta velocidad. ¿Y si se acaban?. Podrás seguir navegando solo que a una velocidad menor: La velocidad mínima de descargar será de 0.005Mbps en 2G y de 0.256Mbps en 3G, 4G y 4.5G." },
      { titulo: "Llamadas y SMS ilimitados", detalle: "a cualquier destino nacional." },
      { titulo: "Minutos ilimitados a destinos internacionales (LDI3)", detalle: "móviles y fijos en EE.UU (incluye Hawai y Alaska), Canadá, Puerto Rico, Chile y México así como fijos de Alemania y China." },
      { titulo: "Cobertura internacional", detalle: " Usa parte de tu plan Max en 14 países de LATAM + 3 de Zona Andina + EE.UU y Canadá. Y ahora, usa el total de los gigas, minutos y sms de tu plan Max en Ecuador, Bolivia y Colombia." },
      { titulo: "Claro video", detalle: "Tienes una suscripción gratuita de 24 meses en sección catalogo." },
      { titulo: "Paramount +", detalle: "Tienes una suscripción gratuita de 24 meses dentro de Claro video." },
      { titulo: "Claro Club", detalle: "Eres parte del programa del beneficios de Claro." },
      { titulo: "Claro música", detalle: "Resgístrate a Claro música gratuito y disfruta GRATIS de la música de tus artitas favoritos." },
      { titulo: "Claro drive", detalle: "Cuentas con 25GB de almacenamiento gratuito." },
    ]
  },

  modal8: {
    nombre: "Max Ilimitado 109.90",
    beneficios: [
      { titulo: "160GB", detalle: "de internet." },
      { titulo: "Datos ilimitadas a nivel nacional", detalle: "Los 160GB de tu plan te sriven para navegar en alta velocidad. ¿Y si se acaban?. Podrás seguir navegando solo que a una velocidad menor: La velocidad mínima de descargar será de 0.005Mbps en 2G y de 0.256Mbps en 3G, 4G y 4.5G." },
      { titulo: "Llamadas y SMS ilimitados", detalle: "a cualquier destino nacional." },
      { titulo: "Minutos ilimitados a destinos internacionales (LDI3)", detalle: "móviles y fijos en EE.UU (incluye Hawai y Alaska), Canadá, Puerto Rico, Chile y México así como fijos de Alemania y China." },
      { titulo: "Cobertura internacional", detalle: " Usa parte de tu plan Max en 14 países de LATAM + 3 de Zona Andina + EE.UU y Canadá. Y ahora, usa el total de los gigas, minutos y sms de tu plan Max en Ecuador, Bolivia y Colombia." },
      { titulo: "Claro video", detalle: "Tienes una suscripción gratuita de 24 meses en sección catalogo." },
      { titulo: "Paramount +", detalle: "Tienes una suscripción gratuita de 24 meses dentro de Claro video." },
      { titulo: "Claro Club", detalle: "Eres parte del programa del beneficios de Claro." },
      { titulo: "Claro música", detalle: "Resgístrate a Claro música gratuito y disfruta GRATIS de la música de tus artitas favoritos." },
      { titulo: "Claro drive", detalle: "Cuentas con 25GB de almacenamiento gratuito." },
    ]
  },

  modal9: {
    nombre: "Max Ilimitado 159.90",
    beneficios: [
      { titulo: "175GB", detalle: "de internet." },
      { titulo: "Datos ilimitadas a nivel nacional", detalle: "Los 175GB de tu plan te sriven para navegar en alta velocidad. ¿Y si se acaban?. Podrás seguir navegando solo que a una velocidad menor: La velocidad mínima de descargar será de 0.005Mbps en 2G y de 0.256Mbps en 3G, 4G y 4.5G." },
      { titulo: "Llamadas y SMS ilimitados", detalle: "a cualquier destino nacional." },
      { titulo: "Minutos ilimitados a destinos internacionales (LDI3)", detalle: "móviles y fijos en EE.UU (incluye Hawai y Alaska), Canadá, Puerto Rico, Chile y México así como fijos de Alemania y China." },
      { titulo: "Cobertura internacional", detalle: " Usa parte de tu plan Max en 14 países de LATAM + 3 de Zona Andina + EE.UU y Canadá. Y ahora, usa el total de los gigas, minutos y sms de tu plan Max en Ecuador, Bolivia y Colombia." },
      { titulo: "Claro video", detalle: "Tienes una suscripción gratuita de 24 meses en sección catalogo." },
      { titulo: "Paramount +", detalle: "Tienes una suscripción gratuita de 24 meses dentro de Claro video." },
      { titulo: "Claro Club", detalle: "Eres parte del programa del beneficios de Claro." },
      { titulo: "Claro música", detalle: "Resgístrate a Claro música gratuito y disfruta GRATIS de la música de tus artitas favoritos." },
      { titulo: "Claro drive", detalle: "Cuentas con 25GB de almacenamiento gratuito." },
    ]
  },

  modal10: {
    nombre: "Max Ilimitado 189.90",
    beneficios: [
      { titulo: "185GB", detalle: "de internet." },
      { titulo: "Datos ilimitadas a nivel nacional", detalle: "Los 185GB de tu plan te sriven para navegar en alta velocidad. ¿Y si se acaban?. Podrás seguir navegando solo que a una velocidad menor: La velocidad mínima de descargar será de 0.005Mbps en 2G y de 0.256Mbps en 3G, 4G y 4.5G." },
      { titulo: "Llamadas y SMS ilimitados", detalle: "a cualquier destino nacional." },
      { titulo: "Minutos ilimitados a destinos internacionales (LDI3)", detalle: "móviles y fijos en EE.UU (incluye Hawai y Alaska), Canadá, Puerto Rico, Chile y México así como fijos de Alemania y China." },
      { titulo: "Cobertura internacional", detalle: " Usa parte de tu plan Max en 14 países de LATAM + 3 de Zona Andina + EE.UU y Canadá. Y ahora, usa el total de los gigas, minutos y sms de tu plan Max en Ecuador, Bolivia y Colombia." },
      { titulo: "Claro video", detalle: "Tienes una suscripción gratuita de 24 meses en sección catalogo." },
      { titulo: "Paramount +", detalle: "Tienes una suscripción gratuita de 24 meses dentro de Claro video." },
      { titulo: "Claro Club", detalle: "Eres parte del programa del beneficios de Claro." },
      { titulo: "Claro música", detalle: "Resgístrate a Claro música gratuito y disfruta GRATIS de la música de tus artitas favoritos." },
      { titulo: "Claro drive", detalle: "Cuentas con 25GB de almacenamiento gratuito." },
    ]
  },

  modal11: {
    nombre: "Max Ilimitado 289.90",
    beneficios: [
      { titulo: "200GB", detalle: "de internet." },
      { titulo: "Datos ilimitadas a nivel nacional", detalle: "Los 200GB de tu plan te sriven para navegar en alta velocidad. ¿Y si se acaban?. Podrás seguir navegando solo que a una velocidad menor: La velocidad mínima de descargar será de 0.005Mbps en 2G y de 0.256Mbps en 3G, 4G y 4.5G." },
      { titulo: "Llamadas y SMS ilimitados", detalle: "a cualquier destino nacional." },
      { titulo: "Minutos ilimitados a destinos internacionales (LDI3)", detalle: "móviles y fijos en EE.UU (incluye Hawai y Alaska), Canadá, Puerto Rico, Chile y México así como fijos de Alemania y China." },
      { titulo: "Cobertura internacional", detalle: " Usa parte de tu plan Max en 14 países de LATAM + 3 de Zona Andina + EE.UU y Canadá. Y ahora, usa el total de los gigas, minutos y sms de tu plan Max en Ecuador, Bolivia y Colombia." },
      { titulo: "Claro video", detalle: "Tienes una suscripción gratuita de 24 meses en sección catalogo." },
      { titulo: "Paramount +", detalle: "Tienes una suscripción gratuita de 24 meses dentro de Claro video." },
      { titulo: "Claro Club", detalle: "Eres parte del programa del beneficios de Claro." },
      { titulo: "Claro música", detalle: "Resgístrate a Claro música gratuito y disfruta GRATIS de la música de tus artitas favoritos." },
      { titulo: "Claro drive", detalle: "Cuentas con 25GB de almacenamiento gratuito." },
    ]
  },
};
// Mostrar modal y poblar contenido desde el objeto 'planes'
$(document).on('click', '.btn-ver-mas', function (e) {
  e.preventDefault();
  const modalId = $(this).data('modal');
  const data = planes[modalId];

  if (data) {
    const $modal = $('#' + modalId);
    $modal.find('.modal-title').text(data.nombre);

    let contenido = '<ul class="modal-beneficios">';
    data.beneficios.forEach(b => {
      contenido += `<li><strong>${b.titulo}:</strong> ${b.detalle}</li>`;
    });
    contenido += '</ul>';

    $modal.find('.modal-body').html(contenido);
    $modal.fadeIn();
  }
});
