import Swiper, { Navigation, Pagination, A11y } from "swiper";

export default function mySwiper() {
  new Swiper(".main-intro__wrapper", {
    direction: "horizontal",
    updateOnWindowResize: true,
    spaceBetween: 300,
    grabCursor: true,
    loop: true,
    modules: [Navigation, Pagination, A11y],
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
    },

    navigation: {
      nextEl: ".main-intro__button--next",
      prevEl: ".main-intro__button--prev",
    },

    pagination: {
      el: '.main-intro__pagination',
      clickable: true,
      renderBullet: function () {
      return `<span class="dot swiper-pagination-bullet"></span>`;
      },
    },
  });

  new Swiper(".main-catalogue__wrapper", {
    direction: "horizontal",
    spaceBetween: 300,
    grabCursor: true,
    loop: true,
    modules: [Navigation, Pagination, A11y],
    updateOnWindowResize: true,
    breakpoints: {
      320: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
    },

    navigation: {
      nextEl: ".main-catalogue__button--next",
      prevEl: ".main-catalogue__button--prev",
    },

    pagination: {
      el: '.main-catalogue__pagination',
      clickable: true,
      renderBullet: function () {
      return `<span class="dot swiper-pagination-bullet"></span>`;
      },
    },
  });
}
