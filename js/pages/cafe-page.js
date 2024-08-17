var swiper = new Swiper(".swiper-menu", {
  slidesPerView: 3,
  spaceBetween: 0,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true,
  },
  keyboard: {
    enabled: true,
  },
  grabCursor: true,
  breakpoints: {
    // when window width is >= XXXpx
    0: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 30
     },
    1800: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  }
});

var swiper2 = new Swiper(".carousel-mini", {
  direction: "horizontal",
  slidesPerView: 'auto',
  speed: '20000',
  spaceBetween: 0,
  watchSlidesProgress: true,
  autoplay: {
    enabled: true,
    delay: 1,
  },
  loop: true,
  allowTouchMove: false,

  pagination: false,
});

Fancybox.bind('[data-fancybox="gallery"]', {
  contentClick: "toggleCover",
  zoom: true,
  initialSize: 'max',

  Toolbar: {
    display: {
      left: [],
      middle: [],
      right: ["zoomIn","close"],
    },
  },

  Images: {
    Panzoom: {
      panMode: "mousemove",
      mouseMoveFactor: 1.1,
      mouseMoveFriction: 0.12
    },
  },

});
