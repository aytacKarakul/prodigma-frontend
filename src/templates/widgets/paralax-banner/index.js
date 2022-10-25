import Swiper,{ Parallax, Pagination, Mousewheel } from 'swiper';

import 'Images/paralax-banner.png';

class SwiperParalax {
    constructor(){
        const swiperverticle = new Swiper('.swiper-paralax', {
          modules: [ Parallax, Pagination, Mousewheel ],
          parallax: true,
          direction: 'vertical',
          speed: 600,
          mousewheel: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
        return swiperverticle;
    }
}

export default SwiperParalax;