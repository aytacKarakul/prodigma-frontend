import axios from "axios";
import { apitoken } from "../../../../auth/authentication";
//import AuthUser from "../../../../utils/AuthUser";

class AuthUserLogin {
  constructor() {
    this.login();
    this.userUIControl();
    this.logout();
  }

  async login() {
    const loginForm = document.querySelector("#login-form");
    if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.querySelector("#js-user-login-email").value;
        const password = document.querySelector(
          "#js-user-login-password"
        ).value;

        var data = new FormData(loginForm);
        data.append("eposta", email);
        data.append("sifre", password);

        axios
          .post(`${process.env.API_KEY}` + "/User/login", data, {
            auth: {
              username: "prodigma3d",
              password: `${apitoken}`,
            },
          })
          .then((res) => {
            if (res.data.error) {
              if (res.data.error.eposta && res.data.error.sifre) {
                alert("Lütfen E-Posta ve Şifrenizi kontrol ediniz!");
              } else if (res.data.error.eposta) {
                alert("Lütfen E-Posta adresinizi giriniz!");
              } else if (res.data.error.sifre) {
                alert("Lütfen şifrenizi giriniz!");
              }
            } else {
              localStorage.setItem("login_hash", JSON.stringify(res.data));
              window.location.href = "/";
            }
          })
          .catch((err) => console.log(err));
      });
    }
  }
  userUIControl() {
    const locHash = localStorage.getItem("login_hash");
    const userName = document.querySelector(".site-header-login-member");
    const userSurname = document.querySelector(
      ".site-header-member-menu-header .bttm .tt2"
    );
    const obj = JSON.parse(locHash);

    if (locHash) {
      userName.innerHTML = obj.ad + " " + obj.soyad;
      userSurname.innerHTML = obj.ad + " " + obj.soyad;
      document
        .querySelector(".site-header-login-success")
        .parentElement.removeAttribute("hidden");
      document.querySelector(".site-header-logoff").classList.add("hidden");
    } else {
      document.querySelector(".site-header-logoff").classList.remove("hidden");
      userName.innerHTML = "";
      userSurname.innerHTML = "";
    }
  }
  logout() {
    const logOut = document.querySelector("#logout-btn");

    if (logOut) {
      logOut.addEventListener("click", function (e) {
        e.preventDefault();

        var data;

        axios
          .post(`${process.env.API_KEY}` + "/User/logout", data, {
            auth: {
              username: "prodigma3d",
              password: `${apitoken}`,
            },
          })
          .then((res) => {
            if (res.data.status === 1) {
              localStorage.removeItem("login_hash");
              window.location.href = "/";
            }
          })
          .catch((err) => console.log(err));
      });
    }
  }
}

export default AuthUserLogin;
