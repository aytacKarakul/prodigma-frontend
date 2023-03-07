import Swiper, { Navigation, Pagination, EffectFade, Autoplay } from "swiper";
import { getUserId } from "../../utils/localStorage";
class MainSwiperSlider {
  constructor() {
    this.initMainSliderFun();

    const swiperMain = new Swiper(".swiper-main", {
      modules: [EffectFade, Navigation, Pagination, Autoplay],
      effect: "fade",
      spaceBetween: 0,
      slidesPerView: "auto",
      autoplay: {
        delay: 7000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    return swiperMain;
  }
  initMainSliderFun() {
    const urls = [{ tr: "/proje-baslat.html" }, { en: "/start-project.html" }];

    const startProjectBtn = document.querySelector(
      "#main-slider-banner-start-project-btn"
    );
    const sliderDescContent = document.querySelector(
      "#js-main-slider-banner-desc"
    );
    if (startProjectBtn) {
      if (getUserId()) {
        startProjectBtn.pathname = urls[0].tr;
        sliderDescContent.remove();
      }
    }
  }
}

export default MainSwiperSlider;

import "Images/slider_1x2.1.jpg";
import "Images/slider_1x2.jpg";
import "Images/slider_2x2.1.jpg";
import "Images/slider_2x2.jpg";
