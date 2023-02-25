import axios from "axios";
import Swiper, { EffectCoverflow, Pagination } from "swiper";
import { apitoken } from "../../../auth/authentication";

async function getAllCategories() {
  await axios
    .get(`${process.env.API_KEY}` + "/categories/get", {
      auth: {
        username: "prodigma3d",
        password: `${apitoken}`,
      },
    })
    .then((res) => {
      res.data.map((items) => {
        const wrapper = document.querySelector(
          ".create-project-swiper .swiper-wrapper"
        );
        if (wrapper) {
          let content = document.createElement("div");
          content.className = "swiper-slide";

          content.innerHTML += `
            <button data-url="/${items.url}.html" id="${items.id}">
                <img src='https://via.placeholder.com/380x380.png', alt='3D Baskı' />
            </button>
            <span>${items.isim}</span>
        `;
          wrapper.prepend(content);

          var swiperCoverFlow = new Swiper(".create-project-swiper", {
            modules: [EffectCoverflow, Pagination],
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            loop: true,
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 160,
              modifier: 1,
              slideShadows: false,
            },
            pagination: {
              el: ".swiper-pagination",
            },
          });
          return swiperCoverFlow;
        }
      });
    })
    .catch((err) => console.log(err));
  //-Slider button
  const createProjectBodyBtn = document.querySelectorAll(
    ".create-project-swiper .swiper-slide button"
  );
  const nextStepFirstBtn = document.querySelector("#js-next-to-step-first");
  createProjectBodyBtn?.forEach((btns) => {
    btns.addEventListener("click", () => {
      const url_str = btns.getAttribute("data-url");
      const get_id = btns.getAttribute("id");

      nextStepFirstBtn.removeAttribute("disabled");
      nextStepFirstBtn.classList.add("btn-green");
      nextStepFirstBtn.setAttribute("href", url_str);
      nextStepFirstBtn.setAttribute("catgoryId", get_id);
    });
  });
}

export default getAllCategories;

import "Images/3d-baskı.png";
import "Images/create-project-bg.png";
import "Images/printing-page-cover.jpg";
