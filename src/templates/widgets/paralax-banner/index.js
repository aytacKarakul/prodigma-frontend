import Swiper, { Pagination, Mousewheel, Parallax } from "swiper";

import "Upload/slider-gizlilik-mb.jpg";
import "Upload/slider-gizlilik.jpg";
import "Upload/slider-surdurulebilirlik-mb.jpg";
import "Upload/slider-surdurulebilirlik.jpg";
import "Upload/slider-sizden-gelenler-mb.jpg";
import "Upload/slider-sizden-gelenler.jpg";

class SwiperParalax {
  constructor() {
    const swiperverticle = new Swiper(".swiper-paralax", {
      modules: [Parallax, Pagination, Mousewheel],
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 10,
      mousewheel: true,
      speed: 600,
      parallax: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    return swiperverticle;
  }
}

export default SwiperParalax;
