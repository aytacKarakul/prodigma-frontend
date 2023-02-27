import "Images/logo.svg";

class Header {
  constructor() {
    this.header = document.querySelector(".site-header");
    this.memberMenuHover = document.querySelector(".site-header-login-success");

    this.initHeader();
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
  }
}

export default Header;
