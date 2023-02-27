import axios from "axios";
import { apitoken } from "../../../auth/authentication";
class ModuleForgotPassword {
  constructor() {
    this.formForgotPassword = document.querySelector(
      "#form-password-forgot-id"
    );
    this.forgotPasswordEmailInput = document.querySelector(
      "#js-forgot-password-email"
    );
    this.forgotPasswordButton = document.querySelector(
      "#js-forgot-password-button"
    );

    //initial component
    this.forgotPasswordFromUI();
  }
  forgotPasswordFromUI = () => {
    if (this.formForgotPassword) {
      this.formForgotPassword.addEventListener("submit", (e) => {
        e.preventDefault();
        if (this.forgotPasswordEmailInput.value == "") {
          console.log("Alanları doldur");
        } else {
          //form data definied
          const formDataForgotToPass = new FormData(this.formForgotPassword);

          //input val
          const epostaForgotPass = this.forgotPasswordEmailInput.value;

          //form data append
          formDataForgotToPass.append("eposta", epostaForgotPass);

          axios({
            method: "post",
            url: `${process.env.API_KEY}` + "/User/forgot-password",
            data: formDataForgotToPass,
            headers: { "Content-Type": "multipart/form-data" },
            auth: {
              username: "prodigma3d",
              password: apitoken,
            },
          })
            .then((response) => {
              alert(response.data.message);
            })
            .catch((response) => console.log(response));
        }
      });
    }
  };
}

export default ModuleForgotPassword;
