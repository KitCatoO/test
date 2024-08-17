
if(document.querySelector('.js-phone')){
  document.querySelectorAll('.js-phone').forEach(item => {
    Inputmask({"mask": "+ 7 (999) 999 - 99 - 99"}).mask(item);
  });
}


var swiper = new Swiper(".swiper", {
  slidesPerView: 5,
  spaceBetween: 30,
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
    768: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1343: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1344: {
      slidesPerView: 5,
      spaceBetween: 30
    },

  }
});
