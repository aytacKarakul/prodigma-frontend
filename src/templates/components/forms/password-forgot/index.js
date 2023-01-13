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
      this.forgotPasswordButton.addEventListener("submit", (e) => {
        if (this.forgotPasswordEmailInput.value == "") {
          console.log("Alanları doldur");
        } else {
          console.log("asas");
        }
        e.preventDefault();
      });
    }
  };
}

export default ModuleForgotPassword;
