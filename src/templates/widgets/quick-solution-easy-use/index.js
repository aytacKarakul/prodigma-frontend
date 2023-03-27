class QuickSolutionBanner {
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

export default QuickSolutionBanner;
