class SolutionEasyBanner {
  constructor() {
    const pageName = document.querySelector(".page-home");
    if (pageName) {
      this.initFunc();
    }
  }

  initFunc() {
    const videoProjectBtn = document.querySelectorAll(
      ".quick-solution-banner-btns button"
    );
    const iframeVideo = document.querySelectorAll(
      ".quick-solution-banner-body iframe"
    );

    videoProjectBtn.forEach((btn) => {
      btn.addEventListener("click", function () {
        const getAttr = this.getAttribute("data-id");
        iframeVideo.forEach((items) => {
          const frameId = items.getAttribute("data-id");
          if (getAttr === frameId) {
            items.classList.add("active");
          } else {
            items.classList.remove("active");
          }
        });
        console.log();
      });
    });
  }
}

export default SolutionEasyBanner;
