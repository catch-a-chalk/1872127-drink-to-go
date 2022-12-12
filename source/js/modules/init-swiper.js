import Swiper, { Navigation, Pagination, A11y } from "swiper";

export default function mySwiper() {
  new Swiper(".swiper", {
    direction: "horizontal",
    updateOnWindowResize: true,
    spaceBetween: 300,
    grabCursor: true,
    loop: true,
    modules: [Navigation, Pagination, A11y],
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },

    navigation: {
      nextEl: ".main-intro__button-next",
      prevEl: ".main-intro__button-prev",
    },

    pagination: {
      el: '.main-intro__pagination',
    },
  });
}
