import axios from "axios";
import { apitoken } from "../../auth/authentication";

class QuickSolutionBanner {
  constructor() {
    const pageName = document.querySelector(".page-home");
    if (pageName) {
      this.initFunc();
      this.onLoadFunc();
    }
  }

  initFunc() {
    const videoProjectBtn = document.querySelectorAll(
      ".quick-solution-banner-btns button"
    );
    const iframeVideo = document.querySelectorAll(
      ".quick-solution-banner-body iframe"
    );
    if(videoProjectBtn){
      videoProjectBtn.forEach((btn) => {
        btn.addEventListener("click", function () {
          const getAttr = this.getAttribute("data-id");
          console.log(this, "sdsd");
          if (this.classList.contains("active")) {
            this.classList.remove("active");
          } else {
            const selectedBtns = document.querySelectorAll(
              ".quick-solution-banner-btns .btn.active"
            );
            selectedBtns.forEach((btn) => {
              btn.classList.remove("active");
            });
          }
          this.classList.add("active");
          iframeVideo.forEach((items) => {
            const frameId = items.getAttribute("data-id");
            if (getAttr === frameId) {
              items.classList.add("active");
            } else {
              items.classList.remove("active");
            }
          });
        });
      });
    }
  }
  async onLoadFunc(){
    await axios.get((`${process.env.API_KEY}` + "/widgets/get"), {
      auth: {
        username: "prodigma3d",
        password: `${apitoken}`,
      },
    }).then(function (res){
      if(res.status === 200 && res.data !== null){
        const getContent = res.data.filter(item => item.dil === document.documentElement.lang && item.url === "home-page-panel-video-frame");
        const appendWrapper = document.querySelector(".quick-solution-banner-body");
        const getJsonData = JSON.parse(getContent[0].json_data);

        getJsonData.forEach((item) => {
          let temp = document.createElement("div");
          temp.className = "responsive-iframe-container";

          let tempIframe = document.createElement("iframe");
          tempIframe.className = "responsive-iframe-container-iframe";

          tempIframe.setAttribute("id", item.id);
          tempIframe.setAttribute("src",`https://www.youtube.com/embed/${item.yazi}?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0&playlist=${item.yazi}`);
          tempIframe.setAttribute("frameborder","0")
          tempIframe.setAttribute("allowfullscreen", true);
          
          temp.append(tempIframe);
          appendWrapper.append(temp);
          
        });
      }
    }).catch((error) => console.log(error))
  }
}

export default QuickSolutionBanner;

import "Upload/2023-04-06-14-09-05_2.mp4";