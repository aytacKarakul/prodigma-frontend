import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import 'Images/how-the-works-prodigma.png';
import 'Images/animation-vectorel.svg';

export const quadrapleBanner = () => {
    
    gsap.registerPlugin(ScrollTrigger);
    const gsapElement = document.querySelectorAll('.quadruple-banner-body-right ul li');

    if(gsapElement){
        gsapElement.forEach((item) => {
            gsap.to(item, {
                y:-500,
                duration: 8,
                scrollTrigger: {
                    trigger: item,
                    start: "bottom 0%",
                    end: "top 10%",
                    scrub: 4,
                    toggleActions: "restart none none none",
                    pin: true,
                    markers: {
                        startColor: "purple",
                        endColor: "fuchsia",
                        fontSize: "1rem"
                    }
                }
            });
        })
    }
}