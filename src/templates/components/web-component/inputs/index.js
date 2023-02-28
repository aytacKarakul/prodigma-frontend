class Inputs {
  constructor() {
    this.el = document.querySelectorAll(".input.textbox > .wrp input");
    this.selectElement = document.querySelectorAll(
      ".input.select > .wrp select"
    );
    this.checkboxElement = document.querySelectorAll(
      ".input.checkbox input[type=checkbox]"
    );
    this.setClass = "valid";
    this.removeClass = "invalid";

    //Function listener
    this.onInputFuncInit();
    this.onSelectFunInit();
    this.onCheckBoxFunInit();
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
        select.options[select.selectedIndex].text;
      });
    });
  };
  onCheckBoxFunInit = () => {
    this.checkboxElement?.forEach((checkbox) => {
      checkbox.addEventListener("change", (e) => {
        console.log(e.target);
        if (e.target.checked) {
          e.target.setAttribute("checked", true);
        } else {
          e.target.setAttribute("checked", false);
        }
      });
    });
  };
}

export default Inputs;
