import "./index.scss";
const tabs = require("tabs");
import IMask from "imask";

const membershipIndividualSelect = document.querySelector(
  "#js-individual-membership"
);
const membershipCorporateSelect = document.querySelector(
  "#js-corporate-membership"
);
const membershipSelect = document.querySelector(".input-membership-select");

const data = {
  id: 1,
  ad: "Aytaç",
  soyad: "Karakullukcu",
  eposta: "aytac.karakul@gmail.com",
  sifre: "a1K2!8981",
  tel_cep: "05514099769",
  kurumsal: "1",
  sirket_tipi: null,
  musteri_tipi: null,
  telefon: null,
  fax: null,
  il: null,
  ilce: null,
  hash: null,
};

var maskOptions = {
  mask: "+{90}(000)000-00-00",
};

class LoginTabs {
  constructor(ad, soyad, eposta, sifre, phone) {
    //initials variables
    ad = this.ad;
    soyad = this.soyad;
    eposta = this.eposta;
    sifre = this.sifre;
    phone = this.phone;

    //global this element
    const _this = this;

    //ui den elemenanlar seçiliyor
    this.loginTabContainer = document.querySelector(".tab-container");
    this.loginForm = document.querySelector("#login-form");
    this.loginFormInput = document.querySelectorAll(
      "#login-form .input.textbox .wrp input"
    );
    this.registerForm = document.querySelector("#register-form");
    this.registerFormInput = document.querySelectorAll(
      "#register-form .input.textbox .wrp input"
    );
    this.registerFormRadioBtnSelection = document.querySelectorAll(
      ".input-step-selection"
    );
    this.warningText = document.querySelector(".warnig-email-text");
    this.warningPasswordText = document.querySelector(".warnig-password-text");
    this.sameEmailAddressText = document.querySelector(
      "warnig-same-email-address-text"
    );
    this.sifreEyeBtn = document.querySelector("#login-form .icon-eye");
    //--input filedslar
    this.eposta = document.querySelector("#js-user-login-email");
    this.sifre = document.querySelector("#js-user-login-password");
    this.ad = document.querySelector("#js-register-user-name");
    this.soyad = document.querySelector("#js-register-user-surname");
    this.registerEposta = document.querySelector("#js-register-user-email");
    this.registerSifre = document.querySelector("#js-register-user-passwords");
    this.registerPhone = document.querySelector("#js-register-user-phone");

    // Login Page Tab sekmesi
    this.init();
    // Login Form
    this.loginUserFromUI();
    //Register a user
    this.registerUserFromUI();
  }

  init = () => {
    if (this.loginTabContainer) {
      tabs(this.loginTabContainer);
      membershipSelect?.firstChild.classList.add("active");
      membershipIndividualSelect?.addEventListener(
        "click",
        this.changeLoginTabContent
      );
      membershipCorporateSelect?.addEventListener(
        "click",
        this.changeLoginTabContent
      );
    }
  };

  //Bireysel ve Kurumsal Tab sekmesi
  changeLoginTabContent = (e) => {
    //function this element
    const _this = this;

    if (e.target.getAttribute("data-tab") == "click-individual") {
      e.target.checked = true;
      membershipCorporateSelect.checked = false;

      _this.registerFormRadioBtnSelection.forEach((item) => {
        if (item.getAttribute("data-tab") == "click-individual") {
          item.nextElementSibling.classList.remove("active");
          item.nextElementSibling.classList.add("hidden");
          item.classList.remove("hidden");
          item.classList.add("active");
        }
      });
    } else if (e.target.getAttribute("data-tab") == "click-corporate") {
      e.target.checked = true;
      membershipIndividualSelect.checked = false;

      _this.registerFormRadioBtnSelection.forEach((item) => {
        if (item.getAttribute("data-tab") == "click-corporate") {
          item.previousSibling.classList.remove("active");
          item.previousSibling.classList.add("hidden");
          item.classList.remove("hidden");
          item.classList.add("active");
        }
      });
    }
  };

  //Login Form Func
  loginUserFromUI = () => {
    //function gloval this variable
    const _this = this;

    if (_this.loginForm) {
      _this.loginFormInput.forEach((item) => {
        item.addEventListener("blur", () => {
          if (item.value == "") {
            item.parentElement.parentElement.classList.remove("valid");
            item.parentElement.parentElement.classList.add("invalid");
          } else {
            item.parentElement.parentElement.classList.remove("invalid");
            item.parentElement.parentElement.classList.add("valid");
          }
        });
      });

      this.eposta.addEventListener("keydown", () => {
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (this.eposta.value.match(emailPattern)) {
          _this.warningText.style.color = "#82C576";
          _this.warningText.innerHTML = "E-posta adresiniz geçerli";
        } else {
          _this.warningText.style.color = "#DF3434";
          _this.warningText.innerHTML =
            "Lütfen geçerli bir e-posta adresi girin!";
        }
        if (this.eposta.value == "") {
          _this.warningText.innerHTML = "";
          this.eposta.parentElement.parentElement.classList.remove("valid");
          this.eposta.parentElement.parentElement.classList.add("invalid");
        } else {
          this.eposta.parentElement.parentElement.classList.remove("invalid");
          this.eposta.parentElement.parentElement.classList.add("valid");
        }
      });

      this.sifre.addEventListener("keydown", () => {
        const _this = this;
        let passwordPatern =
          "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})";

        if (_this.sifre.value.match(passwordPatern)) {
          _this.warningPasswordText.style.color = "#82C576";
          _this.warningPasswordText.innerHTML = "Şifreniz geçerli";
        } else {
          _this.warningPasswordText.style.color = "#DF3434";
          _this.warningPasswordText.innerHTML =
            "Lütfen geçerli bir şifre girin!";
        }
        if (_this.sifre.value == "") {
          _this.warningPasswordText.innerHTML = "";
          this.sifre.parentElement.parentElement.classList.remove("valid");
          this.sifre.parentElement.parentElement.classList.add("invalid");
        } else {
          this.sifre.parentElement.parentElement.classList.remove("invalid");
          this.sifre.parentElement.parentElement.classList.add("valid");
        }
      });
      _this.sifreEyeBtn.addEventListener("click", (e) => {
        const element = e.target.nextElementSibling;
        if (element.value !== "") {
          if (element.getAttribute("type") === "password") {
            element.setAttribute("type", "text");
          } else {
            element.setAttribute("type", "password");
          }
        }
      });
      _this.loginForm.addEventListener("submit", (e) => {
        if (this.eposta.value != data.eposta) {
          this.loginForm.prepend(
            this.loginPageErrorFunc("Lütfen eposta kontrol ediniz!")
          );
        } else if (this.sifre.value != data.sifre) {
          this.loginForm.prepend(
            this.loginPageErrorFunc("Lütfen şifrenizi kontrol ediniz!")
          );
        } else {
          console.log("Giriş Başarılı...");
        }
        e.preventDefault();
      });
    }
  };

  registerUserFromUI = () => {
    //function global this variable
    const _this = this;

    if (_this.registerForm) {
      var phoneMask = IMask(this.registerPhone, maskOptions);
      phoneMask.value;

      _this.registerFormInput.forEach((item) => {
        item.addEventListener("blur", () => {
          if (item.value == "") {
            item.parentElement.parentElement.classList.remove("valid");
            item.parentElement.parentElement.classList.add("invalid");
          } else {
            item.parentElement.parentElement.classList.remove("invalid");
            item.parentElement.parentElement.classList.add("valid");
          }
        });
      });
      _this.registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
      });
    }
  };

  //Login Page Form Error Text
  loginPageErrorFunc = (error) => {
    let temp = document.createElement("div");
    temp.className = "alert alert-danger";
    temp.innerHTML += error;

    setInterval(() => {
      temp.remove();
    }, 2500);
    clearInterval();

    return temp;
  };
}

export default LoginTabs;

import "Images/google-icon.svg";
import "Images/facebook-icon.svg";
