import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const feedbackSwiper = new Swiper(".feedback-swiper", {
  modules: [Pagination],
  slidesPerView: 1,
  spaceBetween: 16,
  watchOverflow: true,

  pagination: {
    el: ".feedback-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
      allowTouchMove: false,
    },
  },
});

export default feedbackSwiper;
