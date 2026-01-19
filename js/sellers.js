import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".sellers-swiper", {
  modules: [Pagination],
  slidesPerView: 1,
  spaceBetween: 16,
  watchOverflow: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 16,
      allowTouchMove: false,
    },
  },
});
