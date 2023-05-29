import axios from "axios";
import Swiper, { Navigation, Pagination, EffectFade, Autoplay } from "swiper";

class MainSwiperSlider {
  constructor() {
    this.apitoken = localStorage.getItem("apitoken");
    this.onLoadMainSlider();
    this.onSliderContentLoader();

    const swiperMain = new Swiper(".swiper-main", {
      modules: [EffectFade, Navigation, Pagination, Autoplay],
      effect: "fade",
      spaceBetween: 0,
      slidesPerView: "auto",
      autoplay: {
        delay: 7000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    return swiperMain;
  }

  onLoadMainSlider(){
    axios.get((`${process.env.API_KEY}` + "/sliders/get"), {
      auth: {
        username: "prodigma3d",
        password: this.apitoken,
      }
    }).then(function (res){
        //console.log(res);
        const sliders = res.data.filter(item => item.dil === document.documentElement.lang);
        //foreach
        sliders.forEach((element) => {
          const appendContainer = document.querySelector(".swiper-main .swiper-wrapper");
          if(appendContainer){
            let temp = document.createElement("div");
            temp.className = "swiper-slide";
  
            temp.innerHTML += `<div class="text-content"><p>${element.isim}</p></div><picture><source media="(max-width: 1024px)" srcset="${process.env.SITE_DOMAIN}${element.mobil_resim}"><source media="(min-width: 1025px)" srcset="${process.env.SITE_DOMAIN}${element.resim}"><img src="${process.env.SITE_DOMAIN}${element.mobil_resim}" alt="${element.isim}"></picture>`;
            appendContainer.append(temp);
          }
        });
    }).catch((error) => console.log(error))

    axios.get((`${process.env.API_KEY}` + "/widgets/get"), {
      auth: {
        username: "prodigma3d",
        password: this.apitoken,
      },
    }).then(function (res){
      const sliderTextWrapper = document.querySelector(".main-slider-banner-text-content-text");
        const contents = res.data.filter(item => item.dil === document.documentElement.lang && item.url === "main-slider-static-text");
        
        //slidet texts
        if(sliderTextWrapper){
          contents.forEach((el) => {
          
            const title = document.createElement("h1");
            const desc = document.createElement("p");
  
            const titleContent = el.isim;
            title.innerHTML = titleContent;
            const descContent = el.aciklama;
            desc.innerHTML = descContent;

            sliderTextWrapper.prepend(title, desc);
          });
        }

        //partners logo
        const partnersList = res.data.filter(item => item.dil === document.documentElement.lang && item.url === "partners-logo");
        let partnerWrap = document.querySelector(".main-slider-banner-partners");

        if(partnerWrap){
          partnersList.forEach((partner) => {
            const partnerJson = JSON.parse(partner.json_data);
            partnerJson.forEach((itm) => {
              let partnerTempDiv = document.createElement("div");
              let partnerTempDivImg = document.createElement("img");
  
              partnerTempDivImg.src = process.env.SITE_DOMAIN + itm.yazi;
              partnerTempDiv.appendChild(partnerTempDivImg);
              partnerWrap.appendChild(partnerTempDiv);
            });
          });
        }
    }).catch((error) => console.log(error))

  }

  onSliderContentLoader() {
    
  }
}

export default MainSwiperSlider;
