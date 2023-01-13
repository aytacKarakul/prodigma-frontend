class Inputs {
  constructor() {
    this.el = document.querySelectorAll(".input.textbox > .wrp input");
    this.selectElement = document.querySelectorAll(
      ".input.select > .wrp select"
    );
    this.setClass = "valid";
    this.removeClass = "invalid";
    this.onInputFuncInit();
    this.onSelectFunInit();
  }

  onInputFuncInit = () => {
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
  };
  onSelectFunInit = () => {
    this.selectElement?.forEach((select) => {
      select.addEventListener("change", () => {
        console.log(select.options[select.selectedIndex].text);
      });
    });
  };
}

export default Inputs;
