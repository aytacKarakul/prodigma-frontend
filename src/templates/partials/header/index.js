import "Images/logo.svg";

class Header {
  constructor() {
    this.header = document.querySelector(".site-header");
    this.memberMenuHover = document.querySelector(".site-header-login-success");
    this.headerLangBtns = document.querySelectorAll(".site-header-lang button");

    this.initHeader();
    this.langChangeFunc();
  }

  initHeader() {
    this.header?.addEventListener("mouseenter", (event) => {
      event.target.classList.add("site-header-anim");
    });
    this.header?.addEventListener("mouseleave", (event) => {
      event.target.classList.remove("site-header-anim");
    });
    this.memberMenuHover?.addEventListener("mouseenter", (event) => {
      event.target.classList.add("animate");
    });
    this.memberMenuHover?.addEventListener("mouseleave", (event) => {
      event.target.classList.remove("animate");
    });
    this.headerLangBtns?.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const btnId = e.target.id;
        if (e.target.classList.contains("selected")) {
          e.target.classList.remove("selected");
        } else {
          const selectedBtn = document.querySelectorAll(
            ".site-header-lang button.selected"
          );
          selectedBtn.forEach((btn) => {
            btn.classList.remove("selected");
          });
        }
        e.target.classList.add("selected");
        localStorage.setItem("lang", btnId);

        // html lang change
        document.documentElement.lang = btnId;
      });
    });
  }

  langChangeFunc() {
    if (localStorage.getItem("lang") == "en") {
      const firstBtn =
        document.querySelector(".site-header-lang").firstElementChild;
      firstBtn.classList.add("selected");
    } else if (localStorage.getItem("lang") == "tr") {
      const lastBtn =
        document.querySelector(".site-header-lang").lastElementChild;
      lastBtn.classList.add("selected");
    }
  }
}

export default Header;
