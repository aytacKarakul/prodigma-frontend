import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "Images/how-the-works-prodigma.png";
import "Images/animation-vectorel.svg";

export const quadrapleBanner = () => {
  gsap.registerPlugin(ScrollTrigger);
  const gsapElement = document.querySelectorAll(
    ".quadruple-banner-body-right ul li"
  );

  if (gsapElement) {
    gsapElement.forEach((el) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "bottom 70%",
          end: "bottom center",
          markers: true,
          toggleActions: "play none reverse none",
          scrub: 1,
        },
      });
      tl.to(el, { opacity: 0, yPercent: -10 });
    });
  }
};
