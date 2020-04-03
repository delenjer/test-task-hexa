'use strict';

// eslint-disable-next-line no-unused-vars,no-undef
const swiper = new Swiper('.swiper-container, .swiper-container2', {
  spaceBetween: 30,
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
