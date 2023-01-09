import Swiper, { Navigation, Scrollbar } from 'swiper';

import 'Images/car.png';
import 'Images/drone.png';
import 'Images/plane.png';

class CncGallerySwiper {
    constructor(){
        const swiperCncWidget = new Swiper('.swiper-cnc-widget', {
            modules: [Navigation, Scrollbar],
            slidesPerView:1.3,
            spaceBetween:20,
            //loop:true,

            breakpoints: {
                640: {
                    slidesPerView: 2.5,
                    spaceBetween:10,
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
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
        });
        return swiperCncWidget;
    }
}

export default CncGallerySwiper;