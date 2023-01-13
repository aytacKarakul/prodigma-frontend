class Inputs {
  constructor() {
    this.el = document.querySelectorAll(".input.textbox > .wrp input");
    this.setClass = "valid";
    this.removeClass = "invalid";
    this.onInputFuncInit();
  }

  onInputFuncInit() {
    this.el?.forEach((element) => {
      element.addEventListener("keyup", () => {
        if (element.value == "") {
          element.parentElement.parentElement.classList.remove(this.setClass);
          element.parentElement.parentElement.classList.add(this.removeClass);
        } else {
          element.parentElement.parentElement.classList.add("input-focus");
          element.parentElement.parentElement.classList.remove(
            this.removeClass
          );
          element.parentElement.parentElement.classList.add(this.setClass);
        }
      });

      element.addEventListener("blur", () => {
        if (element.value == "") {
          element.parentElement.parentElement.classList.remove("input-focus");
          element.parentElement.parentElement.classList.remove(this.setClass);
          element.parentElement.parentElement.classList.add(this.removeClass);
        } else {
          element.parentElement.parentElement.classList.remove(
            this.removeClass
          );
          element.parentElement.parentElement.classList.add(this.setClass);
        }
      });
    });
  }
}

export default Inputs;
