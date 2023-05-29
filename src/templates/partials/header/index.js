import "Images/logo.svg";
import "Images/header-menu-about-img.jpg";
import axios from "axios";
import getApiToken from "../../auth/authentication";

class Header {
  constructor() {
    this.header = document.querySelector(".site-header");
    this.memberMenuHover = document.querySelector(".site-header-login-success");
    this.headerLangBtns = document.querySelectorAll(".site-header-lang a");

    this.initHeader();
    this.langChangeFunc();
    //this.headerCoverImage();
  }
  async headerCoverImage(){
    await axios.get((`${process.env.API_KEY}` + "/widgets/get"), {
      auth: {
        username: "prodigma3d",
        password: `${getApiToken()}`,
      },
    }).then(function (res){
      const img_cover = document.querySelector(".site-header-submenu-banner");
        const cover = res.data.filter(item => item.dil === document.documentElement.lang && item.url === "desktop-header-cover");
        if(cover.length > 0){
          const get_cover = JSON.parse(cover[0].json_data);
          img_cover.style.backgroundImage = `url(${process.env.SITE_DOMAIN}${get_cover[0].yazi})`;
        }
    }).catch((error) => console.log(error))
  }
  siteLoginUserNameSurname() {
    const authUser = localStorage.getItem("login_hash");
    const elemtAppend = document.querySelector(".site-header-login-user");
    const mobileElementAppend = document.querySelector(
      ".site-mobile-header-wrapper-top-member .mmbr"
    );

    if (authUser != null) {
      const getUserParser = JSON.parse(authUser);
      const name = getUserParser.ad.charAt(0);
      const surName = getUserParser.soyad.charAt(0);
      elemtAppend.innerHTML = name + surName;
      mobileElementAppend.innerHTML = name + surName;
    }
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
            ".site-header-lang a.selected"
          );
          selectedBtn.forEach((btn) => {
            btn.classList.remove("selected");
          });
        }
        e.target.classList.add("selected");
        localStorage.setItem("lang", btnId);

        // html lang change
        //window.location.reload();
      });
    });
  }

  langChangeFunc() {
    if (localStorage.getItem("lang") == "tr") {
      const firstBtn =
        document.querySelector(".site-header-lang").firstElementChild;
      document.documentElement.lang = "tr";
      firstBtn.classList.add("selected");
    } else if (localStorage.getItem("lang") == "en") {
      const lastBtn =
        document.querySelector(".site-header-lang").lastElementChild;
      document.documentElement.lang = "en";
      lastBtn.classList.add("selected");
    }
  }
}

export default Header;
