import Swiper, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';

import 'Images/aselsan.png';
import 'Images/roketsan.png';
import 'Images/turkish-technic.png';
import 'Images/mercedes-benz.png';

class MainSwiperSlider {
    constructor(){
        const swiperMain = new Swiper('.swiper-main', {
            modules: [EffectFade, Navigation, Pagination, Autoplay],
            effect: 'fade',
            spaceBetween: 0,
            slidesPerView: 'auto',
            autoplay: {
                delay: 7000,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
        return swiperMain;
    }
}

export default MainSwiperSlider;