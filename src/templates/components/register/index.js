import axios from "axios";
import "./index.scss";
const tabs = require("tabs");
import IMask from "imask";
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

    //onLoadFunctions
    this.onLoadProvince();
    this.onLoadProvinceToDistrict();

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

  async onLoadProvince() {
    //province get list data
    await axios
      .get("https://prodigma3d.rengaver.com/Api/adress/iller", {
        auth: {
          username: "prodigma3d",
          password: apitoken,
        },
      })
      .then(function (response) {
        if (response.data) {
          response.data.forEach((data) => {
            let option = document.createElement("option");
            option.setAttribute("id", data.id);
            option.textContent = data.il_adi;
            document.querySelector("#js-corporate-province").append(option);
          });
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  onLoadProvinceToDistrict() {
    const select = document.querySelector("#js-corporate-province");
    select.addEventListener("change", function () {
      const elemet = select.options[select.selectedIndex];

      axios
        .get(`${process.env.API_KEY}` + "/adress/ilceler/" + `${elemet.id}`, {
          auth: {
            username: "prodigma3d",
            password: apitoken,
          },
        })
        .then(function (response) {
          if (response.data) {
            response.data.forEach((data) => {
              let option = document.createElement("option");
              option.setAttribute("id", data.id);
              option.setAttribute("il_id", data.il_id);
              option.textContent = data.ilce_adi;
              document.querySelector("#js-corporate-district").append(option);
            });
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    });
  }

  //Register Form
  async registerUserFromUI() {
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
      //submit form
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

        var formData = new FormData(_this.registerForm);
        formData.append("ad", ad);
        formData.append("soyad", soyad);
        formData.append("eposta", eposta);
        formData.append("sifre", sifre);
        formData.append("tel_cep", tel_cep);
        formData.append("kurumsal", isKurumsalSelected);
        formData.append("sirket_tipi", sirket_tipi);
        formData.append("musteri_tipi", musteri_tipi);
        formData.append("telefon", telefon);
        formData.append("sirket_tel", telefon);
        formData.append("fax", fax);
        formData.append("il", il);
        formData.append("ilce", ilce);
        formData.append("fatura_adresi", fatura_adresi);
        formData.append("iletisim_izni", iletisim_izni);

        axios({
          method: "post",
          url: `${process.env.API_KEY}` + "/User/create",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
          auth: {
            username: "prodigma3d",
            password: apitoken,
          },
        })
          .then((response) => {
            if (response.data.error) {
              if (response.data.error.ad) {
                alert("Lütfen Ad alanını kontrol ediniz!");
              } else if (response.data.error.soyad) {
                alert("Lütfen Soyad alanını kontrol ediniz!");
              } else if (response.data.error.eposta) {
                alert(
                  "Lütfen Eposta alanını kontrol ediniz ve eksik ya da aynı eposta olmadığından emin olunuz!"
                );
              } else if (response.data.error.sifre) {
                alert("Lütfen Şifre alanını kontrol ediniz!");
              } else if (response.data.error.tel_cep) {
                alert("Lütfen Cep Telefonu alanını kontrol ediniz!");
              } else if (response.data.error.kurumsal) {
                alert("Lütfen Bireysel ya da Kurumsal alanını kontrol ediniz!");
              }
            } else {
              this.userLoginSuccess("success");
            }
          })
          .catch((response) => response);
      });
    }
  }

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
    }, 5000);
  };

  //DUhan
  userRegisterWarning = (type) => {
    let temp = document.createElement("div");
    temp.className = `user-register-${type}`;

    const wrap = document.querySelector(".plog-tabs");
    wrap.style.display = "none";

    temp.innerHTML += `
    <i class="icon icon-close"></i>
      <div class="t1">Lütfen girmiş olduğunuz alanların eksiksiz olduğundan emin olunuz!</div>
    `;
    document.querySelector(".plog-enters").append(temp);

    setTimeout(() => {
      temp.remove();
      window.location.reload();
    }, 3000);
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
import "Images/loginCover.jpg";
