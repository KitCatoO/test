var swiper = new Swiper(".swiper-container", {
  loop: false,
  spaceBetween: 10,
  slidesPerView: 4,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  autoplay: {
    delay: '10000',
  },
});

var swiper2 = new Swiper(".swiper-main-img", {
  loop: true,
  spaceBetween: 10,
  navigation: false,
  thumbs: {
    swiper: swiper,
    autoScrollOffset: 1,
  },
  autoplay: {
    delay: '10000',
  },
});

var swiper3 = new Swiper(".carousel", {
  direction: "vertical",
  slidesPerView: 'auto',
  speed: '20000',
  spaceBetween: 20,
  watchSlidesProgress: true,
  autoplay: {
    enabled: true,
    delay: 1,
  },
  loop: true,
  allowTouchMove: false,

  pagination: false,
});

var swiper4 = new Swiper(".revert-carousel", {
  direction: "vertical",
  slidesPerView: 'auto',
  speed: '20000',
  spaceBetween: 20,
  watchSlidesProgress: true,
  autoplay: {
    enabled: true,
    delay: 1,
    reverseDirection: true,
  },
  loop: true,
  allowTouchMove: false,

  pagination: false,
});
