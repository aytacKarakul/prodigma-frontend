import axios from "axios";
import {apitoken} from "../../auth/authentication";

export async function QuadrapleBanner() {
  var scrollW = document.querySelector(".quadruple-banner-body-right-wrapper .raw-html-embed");
  var scrollUl = document.querySelector(
    ".quadruple-banner-body-right-wrapper .raw-html-embed ul"
  );

  let appendWrapper = document.querySelector(".quadruple-banner");
  
  if (appendWrapper) {
    await axios.get((`${process.env.API_KEY}` + "/widgets/get"), {
      auth: {
        username: "prodigma3d",
        password: `${apitoken}`,
      },
    }).then(function (res){

      if(res.status === 200 && res.data !== null){
        const lists = res.data.filter(item => item.dil === document.documentElement.lang && item.url === "home-quadruple-banner");

        //foreach
        lists.forEach((el) => {
          let tempUlWrapper = document.createElement("div");
          let tempUlWrapperMobile = document.createElement("div");

          tempUlWrapper.className = "quadruple-banner-wrapper";
          tempUlWrapperMobile.className = "quadruple-banner-mobile";
          const dataList = JSON.parse(el.json_data);

          tempUlWrapper.innerHTML += `<div class="quadruple-banner-header"><div class="quadruple-banner-header-title"><p>${el.isim}</p></div></div><div class="quadruple-banner-body"><div class="quadruple-banner-body-img"><picture> <source media="(max-width: 1024px)" srcset="${process.env.SITE_DOMAIN}${dataList[0].yazi}"><source media="(min-width: 1025px)" srcset="${process.env.SITE_DOMAIN}${dataList[0].yazi}"><img src="${process.env.SITE_DOMAIN}${dataList[0].yazi}" alt="${el.isim}"></picture></div><div class="quadruple-banner-body-right"><div class="quadruple-banner-body-right-wrapper">${dataList[1].yazi}</div></div></div>`;

          tempUlWrapperMobile.innerHTML += `<div class="quadruple-banner-mobile-body"><div class="quadruple-banner-mobile-body-content"><div class="quadruple-banner-mobile-body-content">${dataList[1].yazi}</div></div></div>`;

          appendWrapper.appendChild(tempUlWrapper);
          appendWrapper.appendChild(tempUlWrapperMobile);
        });
      }
    }).catch((error) => console.log(error));

    var itemsScrolled,
      itemsMax,
      cloned = false;

    var listOpts = {
      itemCount: null,
      itemHeight: null,
      items: [],
    };
    function scrollWrap() {
      itemsScrolled = Math.ceil(
        (this.scrollTop + listOpts.itemHeight / 3) / listOpts.itemHeight
      );

      if (this.scrollTop < 1) {
        itemsScrolled = 0;
      }

      listOpts.items.forEach(function (ele) {
        ele.classList.remove("active");
      });

      if (itemsScrolled < listOpts.items.length) {
        listOpts.items[itemsScrolled].classList.add("active");
      }
    }
    function initItems(scrollSmooth) {
      listOpts.items = [].slice.call(scrollUl.querySelectorAll("li"));
      listOpts.itemHeight = listOpts.items[0].clientHeight;
      listOpts.itemCount = listOpts.items.length;

      if (!itemsMax) {
        itemsMax = listOpts.itemCount;
      }

      if (scrollSmooth) {
        var seamLessScrollPoint = (itemsMax - 4) * listOpts.itemHeight;
        scrollW.scrollTop = seamLessScrollPoint;
      }
    }

    document.addEventListener("DOMContentLoaded", function (event) {
      initItems();
      scrollW.onscroll = scrollWrap;
    });
  }
}
