import axios from "axios";
import Swiper, { Pagination, Mousewheel, Parallax } from "swiper";

class SwiperParalax {
  constructor() {
    this.api = localStorage.getItem("apitoken");
    this.onLoadData();
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
  onLoadData(){
    axios.get((`${process.env.API_KEY}` + "/widgets/get"), {
      auth: {
        username: "prodigma3d",
        password: `${this.api}`,
      },
    }).then(function (res){
      const appendSliderWrapper = document.querySelector(".swiper-paralax .swiper-wrapper");

        if(appendSliderWrapper){
          const lists = res.data.filter(item => item.dil === document.documentElement.lang && item.url === "home-page-paralax-slider");
          const lists2 = res.data.filter(item => item.dil === document.documentElement.lang && item.url === "home-page-paralax-slider-sustainability");
          const lists3 = res.data.filter(item => item.dil === document.documentElement.lang && item.url === "home-page-paralax-slider-news");

          if(lists.length !== 0){
            const l1 = JSON.parse(lists[0].json_data);
            let temp1 = document.createElement("li");
            temp1.className = "swiper-slide";

            temp1.innerHTML += `<div class="txt-abs"><div class="title">${l1[2].yazi}</div><div class="subtitle">${l1[3].yazi}</div></div><picture><source media="(max-width: 1024px)" srcset="${process.env.SITE_DOMAIN}${l1[0].yazi}"><source media="(min-width: 1025px)" srcset="${process.env.SITE_DOMAIN}${l1[1].yazi}"><img src="${process.env.SITE_DOMAIN}${l1[0].yazi}" alt="${l1[2].yazi}"></picture>`;
            appendSliderWrapper.prepend(temp1);
          }
          if(lists2.length !== 0){
            const l2 = JSON.parse(lists2[0].json_data);
            let temp2 = document.createElement("li");
            temp2.className = "swiper-slide";

            temp2.innerHTML += `<div class="txt-abs"><div class="title">${l2[2].yazi}</div><div class="subtitle">${l2[3].yazi}</div></div><picture><source media="(max-width: 1024px)" srcset="${process.env.SITE_DOMAIN}${l2[0].yazi}"><source media="(min-width: 1025px)" srcset="${process.env.SITE_DOMAIN}${l2[1].yazi}"><img src="${process.env.SITE_DOMAIN}${l2[0].yazi}" alt="${l2[2].yazi}"></picture>`;  
            appendSliderWrapper.prepend(temp2);
          }
          if(lists3.length !== 0){
            const l3 = JSON.parse(lists3[0].json_data);
            const l3Url = l3.filter(t => t.tip === "text");
            let temp3 = document.createElement("li");
            temp3.className = "swiper-slide";

            if(l3Url.length > 0){
              temp3.innerHTML += `<a href="${l3Url[0].yazi}"><div class="txt-abs"><div class="title">${l3[2].yazi}</div></div><picture><source media="(max-width: 1024px)"srcset="${process.env.SITE_DOMAIN}${l3[0].yazi}"><source media="(min-width: 1025px)" srcset="${process.env.SITE_DOMAIN}${l3[1].yazi}"><img src="${process.env.SITE_DOMAIN}${l3[0].yazi}" alt="${l3[0].yazi}"></picture></a>`;
              appendSliderWrapper.prepend(temp3);
            }
            else{
              temp3.innerHTML += `<div class="txt-abs"><div class="title">${l3[2].yazi}</div></div><picture> <source media="(max-width: 1024px)"srcset="${process.env.SITE_DOMAIN}${l3[0].yazi}"><source media="(min-width: 1025px)" srcset="${process.env.SITE_DOMAIN}${l3[1].yazi}"><img src="${process.env.SITE_DOMAIN}${l3[0].yazi}" alt="${l3[2].yazi}"></picture>`;
              appendSliderWrapper.prepend(temp3);
            }
          }
        }
    }).catch((error) => console.log(error));
  }
}

export default SwiperParalax;
