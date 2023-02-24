import axios from "axios";

export default async function login() {
  let apitoken = localStorage.getItem("apitoken");

  const loginForm = document.querySelector("#login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.querySelector("#js-user-login-email").value;
      const password = document.querySelector("#js-user-login-password").value;
    
      axios
      .post(
        "https://prodigma3d.rengaver.com/Api/User/login",
        { eposta: email, sifre: password },
        {
          auth: {
            username: "prodigma3d",
            password: `${apitoken}`,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));});
  }
}
