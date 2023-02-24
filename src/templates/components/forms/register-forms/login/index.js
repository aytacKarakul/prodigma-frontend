import axios from "axios";
import { apitoken } from "../../../../auth/authentication";
import getUserInfos from "../../../../utils/getUserInfos";

export default async function login() {
  const loginForm = document.querySelector("#login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.querySelector("#js-user-login-email").value;
      const password = document.querySelector("#js-user-login-password").value;

      var data = new FormData(loginForm);
      data.append("eposta", `${email}`);
      data.append("sifre", `${password}`);

      axios
        .post(`${process.env.API_KEY}` +"/User/login", data,
        {
          auth: {
            username: "prodigma3d",
            password: `${apitoken}`,
          },
        }
        )
        .then((res) => {
            let getLoginHash = res.data.login_hash;
            if(getLoginHash != undefined) {
                localStorage.setItem("login_hash", getLoginHash)
                getUserInfos(res.data.ad, res.data.soyad);
                //window.location.href= "/";
            }
            else {
                console.log("alertt")
            }
        }) 
        .catch((err) => console.log(err));
    });
  }
}