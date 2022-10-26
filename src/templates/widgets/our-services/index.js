import Swiper, { Navigation, Scrollbar } from 'swiper';

import 'Images/slider-bg.png';
import 'Images/3d-tasarim.png';
import 'Images/cnc-isleme.png';
import 'Images/silikon-kaplama.png';
import 'Images/enjeksiyon-kaliplama.png';

class OurSerivesSwiper {
    constructor(){
        const swiperOurWidget = new Swiper('.swiper-our-widget', {
            modules: [Navigation, Scrollbar],
            slidesPerView: 1.3,
            spaceBetween: 20,
            //loop: true,

            breakpoints: {
                640: {
                    slidesPerView: 2.5,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3.5,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 4.1,
                    spaceBetween: 20,
                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
        });
        return swiperOurWidget;
    }
}

export default OurSerivesSwiper;