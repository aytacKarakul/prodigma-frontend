import Swiper, { Navigation, Pagination, EffectFade } from 'swiper';

class MainSwiperSlider {
    constructor(){
        const swiperMain = new Swiper('.swiper-main', {
            modules: [EffectFade, Navigation, Pagination],
            effect: 'fade',
            spaceBetween: 0,
            slidesPerView: 'auto',
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