(function () {
  // Seleccionamos el contenedor del carrusel (de clase .slide-container)
  var slideContainer = $('.slide-container');

  // Inicializamos Slick Slider con configuración responsiva
  slideContainer.slick({
    slidesToShow: 1,              // Por defecto: 1 tarjeta (móvil)
    centerMode: true,             // Centra la tarjeta activa
    centerPadding: '0px',         // Sin padding lateral
    arrows: false,                // Ocultamos flechas
    dots: true,                   // Indicadores inferiores (opcional)
    responsive: [
      {
        breakpoint: 780,          // Pantallas menores a 780px
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '0px'
        }
      },
      {
        breakpoint: 3000,         // Escritorio
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: '0px'
        }
      }
    ]
  });

  // Oculta todas las imágenes dentro de las tarjetas
  $('.clash-card__image img').hide();

  // Muestra la imagen de la tarjeta activa al iniciar
  $('.slick-active').find('.clash-card img').fadeIn(200);

  // Antes de cambiar el slide
  slideContainer.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.slick-active').find('.clash-card img').fadeOut(1000);
  });

  // Después de cambiar el slide
  slideContainer.on('afterChange', function (event, slick, currentSlide) {
    $('.slick-active').find('.clash-card img').fadeIn(200);
  });

})();
  