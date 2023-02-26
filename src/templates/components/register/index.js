import "./index.scss";
const tabs = require("tabs");
import IMask from "imask";
import displayMessage from "../../utils/displayMessages";
import { apitoken } from "../../auth/authentication";

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
    this.membershipIndividualSelect = document.querySelector(
      "#js-individual-membership"
    );
    this.membershipCorporateSelect = document.querySelector(
      "#js-corporate-membership"
    );
    this.membershipSelect = document.querySelector(".input-membership-select");
    //Login Form
    this.loginForm = document.querySelector("#login-form");
    this.loginFormWarningEmailText = document.querySelector(
      ".warning-email-text"
    );
    this.loginFormWarningPasswordText = document.querySelector(
      ".warning-password-text"
    );
    this.sifreEyeBtn = document.querySelector("#login-form .icon-eye");
    // Register Form
    this.registerForm = document.querySelector("#register-form");
    this.registerFormFieldSelection =
      document.querySelectorAll(".hidden.corporate");
    this.registerEmailAddressUI = document.querySelector(
      ".warning-same-email-address-text"
    );
    this.registerPassTextUI = document.querySelector(
      ".warning-register-pass-text"
    );
    //--input filedslar
    this.eposta = document.querySelector("#js-user-login-email");
    this.sifre = document.querySelector("#js-user-login-password");
    this.ad = document.querySelector("#js-register-user-name");
    this.soyad = document.querySelector("#js-register-user-surname");
    this.registerEposta = document.querySelector("#js-register-user-email");
    this.registerSifre = document.querySelector("#js-register-user-passwords");
    this.registerPhone = document.querySelector("#js-register-user-phone");
    this.registerCorporateSelect = document.querySelector("#js-corporate-name");
    this.registerCorporateTypeSelect =
      document.querySelector("#js-corporate-type");
    this.registerNormalPhone = document.querySelector(
      "#js-register-user-normal-phone"
    );
    this.registerFax = document.querySelector("#js-register-user-fax");
    this.registerProvince = document.querySelector("#js-corporate-province");
    this.registerDistrict = document.querySelector("#js-corporate-district");
    this.registerBillingAddress = document.querySelector(
      "#js-corporate-billing-address"
    );
    this.registerPrivacy = document.querySelector(
      "#js-user-remember-privacy-individual"
    );

    this.emailRegexPatern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    // this.passRegexPatern =
    //   "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})";

    // Login Page Tab sekmesi
    this.tabInit();
    // Login Form
    this.loginUserFromUI();
    //Register a user
    this.registerUserFromUI();
  }

  tabInit = () => {
    if (this.loginTabContainer) {
      tabs(this.loginTabContainer);
      this.membershipSelect?.firstChild.classList.add("active");
      this.membershipIndividualSelect?.addEventListener(
        "click",
        this.changeLoginTabContent
      );
      this.membershipCorporateSelect?.addEventListener(
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
      this.membershipCorporateSelect.checked = false;

      _this.registerFormFieldSelection.forEach((item) => {
        item.classList.add("hidden");
      });
    } else if (e.target.getAttribute("data-tab") == "click-corporate") {
      e.target.checked = true;
      this.membershipIndividualSelect.checked = false;

      _this.registerFormFieldSelection.forEach((item) => {
        item.classList.remove("hidden");
      });
    }
  };

  //Login Form Func
  loginUserFromUI = () => {
    if (this.loginForm) {
      this.eposta.addEventListener("keyup", () => {
        if (this.eposta.value.match(this.emailRegexPatern)) {
          this.loginFormWarningEmailText.style.color = "#82C576";
          this.loginFormWarningEmailText.innerHTML =
            "E-posta adresiniz geçerli";
        } else {
          this.loginFormWarningEmailText.style.color = "#DF3434";
          this.loginFormWarningEmailText.innerHTML =
            "Lütfen geçerli bir e-posta adresi girin!";
        }
        if (this.eposta.value == "") {
          this.loginFormWarningEmailText.innerHTML = "";
        }
      });
      this.sifre.addEventListener("keyup", () => {
        if (this.sifre.value.match(this.passRegexPatern)) {
          this.loginFormWarningPasswordText.style.color = "#82C576";
          this.loginFormWarningPasswordText.innerHTML = "Geçerli Şifre";
        } else {
          this.loginFormWarningPasswordText.style.color = "#DF3434";
          this.loginFormWarningPasswordText.innerHTML =
            "Lütfen geçerli bir şifre giriniz!";
        }
        if (this.sifre.value == "") {
          this.loginFormWarningPasswordText.innerHTML = "";
        }
      });
      this.sifreEyeBtn.addEventListener("click", (e) => {
        const element = e.target.nextElementSibling;
        if (element.value !== "") {
          if (element.getAttribute("type") === "password") {
            element.setAttribute("type", "text");
          } else {
            element.setAttribute("type", "password");
          }
        }
      });
      // Login Form Actions
      // this.loginForm.addEventListener("submit", (e) => {
      //   if (this.eposta.value != data.eposta) {
      //     this.loginForm.prepend(
      //       this.loginPageErrorFunc("Lütfen eposta kontrol ediniz!")
      //     );
      //   } else if (this.sifre.value != data.sifre) {
      //     this.loginForm.prepend(
      //       this.loginPageErrorFunc("Lütfen şifrenizi kontrol ediniz!")
      //     );
      //   } else {
      //     console.log("Giriş Başarılı...");
      //   }
      //   e.preventDefault();
      // });
    }
  };
  //Register Form
  registerUserFromUI = () => {
    //function global this variable
    const _this = this;

    if (_this.registerForm) {
      this.registerPhone = IMask(this.registerPhone, maskOptions);
      this.registerNormalPhone = IMask(this.registerNormalPhone, maskOptions);
      this.registerFax = IMask(this.registerFax, maskOptions);

      this.registerPhone.value;
      this.registerNormalPhone.value;
      this.registerFax.value;

      this.registerEposta.addEventListener("keyup", () => {
        if (this.registerEposta.value.match(this.emailRegexPatern)) {
          this.registerEmailAddressUI.style.color = "#82C576";
          this.registerEmailAddressUI.innerHTML = "E-posta adresiniz geçerli";
        } else {
          this.registerEmailAddressUI.style.color = "#DF3434";
          this.registerEmailAddressUI.innerHTML =
            "Lütfen geçerli bir e-posta adresi girin!";
        }
        if (this.registerEposta.value == "") {
          this.registerEmailAddressUI.innerHTML = "";
        }
      });
      this.registerSifre.addEventListener("keyup", () => {
        if (this.registerSifre.value.match(this.passRegexPatern)) {
          this.registerPassTextUI.style.color = "#82C576";
          this.registerPassTextUI.innerHTML = "Geçerli Şifre";
        } else {
          this.registerPassTextUI.style.color = "#DF3434";
          this.registerPassTextUI.innerHTML =
            "Şifreniz en az 8 karakter olmalıdır. Bir büyük harf ve bir özel karakter içermelidir.";
        }
        if (this.registerSifre.value == "") {
          this.registerPassTextUI.innerHTML = "";
        }
      });
      _this.registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let isKurumsalSelected;
        const isKurumsal = document.querySelectorAll(
          ".input-membership-select .radio input"
        );
        for (const radioBtn of isKurumsal) {
          if (radioBtn.checked) {
            isKurumsalSelected = radioBtn.value;
          }
        }
        console.log(isKurumsalSelected);

        let isIletisimSelected;
        if (_this.registerPrivacy.checked) {
          isIletisimSelected = 1;
        } else {
          isIletisimSelected = 0;
        }

        const ad = _this.ad.value;
        const soyad = _this.soyad.value;
        const eposta = _this.registerEposta.value;
        const sifre = _this.registerSifre.value;
        const tel_cep = _this.registerPhone.value;
        const sirket_tipi = _this.registerCorporateSelect.selectedIndex;
        const musteri_tipi = _this.registerCorporateTypeSelect.selectedIndex;
        const telefon = _this.registerNormalPhone.value;
        const fax = _this.registerFax.value;
        const il = _this.registerProvince.value;
        const ilce = _this.registerDistrict.value;
        const fatura_adresi = _this.registerBillingAddress.value;
        const iletisim_izni = isIletisimSelected;

        var data = new FormData(_this.registerForm);
        data.append("ad", ad);
        data.append("soyad", soyad);
        data.append("eposta", eposta);
        data.append("sifre", sifre);
        data.append("tel_cep", tel_cep);
        data.append("kurumsal", isKurumsalSelected);
        data.append("sirket_tipi", sirket_tipi);
        data.append("musteri_tipi", musteri_tipi);
        data.append("sirket_tel", telefon);
        data.append("fax", fax);
        data.append("il", il);
        data.append("ilce", ilce);
        data.append("fatura_adresi", fatura_adresi);
        data.append("iletisim_izni", iletisim_izni);

        let users;

        axios
          .post(`${process.env.API_KEY}` + "/User/create", data, {
            auth: {
              username: "prodigma3d",
              password: apitoken,
            },
          })
          .then((res) => (users = console.log(res.data)))
          .catch((err) => console.log(err));
        if (
          _this.ad.value == "" ||
          _this.soyad.value == "" ||
          _this.registerEposta.value == "" ||
          _this.registerSifre.value == "" ||
          _this.registerPhone.value == ""
        ) {
          _this.registerForm.prepend(
            _this.loginPageErrorFunc(
              "*Lütfen tüm alanları doldurduğunuzdan emin olunuz!"
            )
          );
        } else if (_this.registerEposta.value === users?.eposta) {
          _this.registerForm.prepend(
            _this.loginPageErrorFunc("*Bu e-postaya ait bir üyelik mevcut!")
          );
        } else {
          //Testing
          this.userLoginSuccess("success");
          console.log("Üyelik Oluşturuldu...");
        }
      });
    }
  };

  userLoginSuccess = (type) => {
    let temp = document.createElement("div");
    temp.className = `user-login-${type}`;

    const wrap = document.querySelector(".plog-tabs");
    wrap.innerHTML = "";

    temp.innerHTML += `
    <i class="icon icon-success"></i>
    <div class="t1">Aramıza hoş geldin ${this.ad.value}, üyeliğin başarıyla tamamlandı.</div>
    <div class="t2">Artık Prodigma dünyasını keşfetmeye hazırsın!</div>
    `;

    document.querySelector(".plog-enters").append(temp);

    setTimeout(() => {
      temp.remove();
      window.location.href = "/";
    }, 10000);
  };

  //DUhan
  userRegisterWarning = (type) => {
    let temp = document.createElement("div");
    temp.className = `user-register-${type}`;

    const wrap = document.querySelector(".plog-tabs");
    wrap.style.display = "none";

    temp.innerHTML += `
    <i class="icon icon-close"></i>
    <div class="t1">Üyelik işlemi oluşturulurken bir sorun oluştu.</div>
    <div class="user-register-turn-btn">
    <a class="btn btn-green btn-medium" title="Üyelik Adımına Dön" href="/login.html"><span>Üyelik Adımına Dön</span></a>
    </div>
    `;

    document.querySelector(".plog-enters").append(temp);
  };

  //Login Page Form Error Text
  loginPageErrorFunc = (error) => {
    let temp = document.createElement("div");
    temp.className = "alert alert-danger";
    temp.innerHTML += error;

    setInterval(() => {
      temp.remove();
    }, 2300);
    clearInterval();

    return temp;
  };
}

export default LoginTabs;

import "Images/google-icon.svg";
import "Images/facebook-icon.svg";
import axios from "axios";
