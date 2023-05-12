import axios from "axios";
import {apitoken} from "../../auth/authentication";
import Swiper, { Navigation, Scrollbar } from "swiper";

class OurSerivesSwiper {
  constructor() {
    this.onLoadServicesList();

    const swiperOurWidget = new Swiper(".swiper-our-widget", {
      modules: [Navigation, Scrollbar],
      slidesPerView: 1.3,
      spaceBetween: 10,
      //loop: true,
      breakpoints: {
        640: {
          slidesPerView: 2.5,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3.5,
          spaceBetween: 15,
        },
        1024: {
          //slidesPerView: 4.1,
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
    });
    return swiperOurWidget;
  }
  async onLoadServicesList(){
    await axios.get((`${process.env.API_KEY}` + "/widgets/get"), {
      auth: {
        username: "prodigma3d",
        password: `${apitoken}`,
      },
    }).then(function (res){

      if(res.status === 200 && res.data !== null){
        const appendContent = document.querySelector(".swiper-our-widget .swiper-wrapper");
        if(appendContent){
          const services = res.data.filter(item => item.dil === document.documentElement.lang && item.url === "our-services-banner");
          const getData = JSON.parse(services[0].json_data);

          const img = getData.filter(item => item.tip === "image");
          const txt = getData.filter(item => item.tip === "text");
          const subTxt = getData.filter(item => item.tip === "subText");

          const a = img.map((as) => {
            return as;
          });
          const b = txt.map((bes) => {
            return bes;
          });
          const c = subTxt.map((ces) => { 
            return ces;
          });
          const myArray = new Array();

          let object = {
            img: a[0].yazi,
            title: b[0].yazi,
            url: c[0].yazi
          }
          let object2 = {
            img: a[1].yazi,
            title: b[1].yazi,
            url: c[1].yazi
          }
          let object3 = {
            img: a[2].yazi,
            title: b[2].yazi,
            url: c[2].yazi
          }
          let object4 = {
            img: a[3].yazi,
            title: b[3].yazi,
            url: c[3].yazi
          }
          myArray.push(object, object2, object3, object4);

          myArray.forEach((items) => {  
            let tmp = document.createElement("li");
            tmp.className = "swiper-slide";
            tmp.innerHTML += `<a href="${items.url}"><div class="img"><img src="${process.env.SITE_DOMAIN}${items.img}" alt="${items.title}" /></div><div class="txt">${items.title}</div></a>`;
            appendContent.append(tmp);
          });
        }
      }
    }).catch((error) => console.log(error))
  }
}

export default OurSerivesSwiper;
