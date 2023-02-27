import axios from "axios";
import { apitoken } from "../../../../auth/authentication";
import AuthUser from "../../../../utils/AuthUser";

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
        data.append("eposta", `${email}`);
        data.append("sifre", `${password}`);

        axios
          .post(`${process.env.API_KEY}` + "/User/login", data, {
            auth: {
              username: "prodigma3d",
              password: `${apitoken}`,
            },
          })
          .then((res) => {
            let getLoginHash = res.data.login_hash;
            if (getLoginHash != undefined) {
              localStorage.setItem("login_hash", getLoginHash);
              new AuthUser(res.data.ad, res.data.soyad);
              window.location.href = "/";
            } else {
              console.log("alert");
            }
          })
          .catch((err) => console.log(err));
      });
    }
  }
  userUIControl() {
    const locHash = localStorage.getItem("login_hash");
    if (locHash) {
      document
        .querySelector(".site-header-login-success")
        .parentElement.removeAttribute("hidden");
      document.querySelector(".site-header-logoff").classList.add("hidden");
    } else {
      document.querySelector(".site-header-logoff").classList.remove("hidden");
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
              window.location.reload();
            }
          })
          .catch((err) => console.log(err));
      });
    }
  }
}

export default AuthUserLogin;
