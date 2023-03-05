class Metrics {
  constructor() {
    this.initMetricsFunc();
    this.btnsOffer = document.querySelector(
      "#create-project-form .btn, #create-project-form-3d .btn"
    );
    const clickBtn = this.btnsOffer;
  }

  initMetricsFunc() {
    this.createTemplate();
    this.onChangeInputs();
    this.onKeyDownInput();
    this.onClickBtnsEvent();
  }
  createTemplate() {
    let createProjctLeft = document.querySelector(".create-project-left");

    let scaleProperties = document.createElement("div");
    scaleProperties.className = "create-project-scales";

    scaleProperties.innerHTML = `
        <div class='create-project-scales-inner'>
            <div class='create-project-scales-lft'>
                <input type="text" id="js-scales-input-width" name="scales-width"></input>
                <span>X</span>
                <input type="text" id="js-scales-input-height" name="scales-height"></input>
                <span>X</span>
                <input type="text" id="js-scales-input-depth" name="scales-depth"></input>
            </div>
            <div class='create-project-scales-rgh'>
                <button type="button" name="1">MM</button>
                <button type="button" name="2">CM</button>
                <button type="button" name="3">M</button>
                <button type="button" name="4">INCH</button>
            </div>
        </div>
    `;

    createProjctLeft.appendChild(scaleProperties);
    return scaleProperties;
  }
  onChangeInputs() {
    const scalesWidthInput = document.querySelector("#js-scales-input-width");
    const scalesHeightInput = document.querySelector("#js-scales-input-height");
    const scalesDepthInput = document.querySelector("#js-scales-input-depth");
    const btnsOfferInput = document.querySelector(
      "#create-project-form .btn, #create-project-form-3d .btn"
    );

    scalesWidthInput.addEventListener("change", function (event) {
      const inputWidht = event.target.value;
      btnsOfferInput.setAttribute("genislik", event.target.value);
    });
    scalesHeightInput.addEventListener("change", function (event) {
      const inputHeight = event.target.value;
      btnsOfferInput.setAttribute("yukseklik", event.target.value);
    });
    scalesDepthInput.addEventListener("change", function (event) {
      const inputDepth = event.target.value;
      btnsOfferInput.setAttribute("derinlik", event.target.value);
    });
  }
  onKeyDownInput() {
    const dragImgWrapper = document.querySelector(".drag-area");
    const inputLists = document.querySelectorAll(
      ".create-project-scales-lft input"
    );
    inputLists.forEach((input) => {
      input.addEventListener("keypress", function () {
        if (!dragImgWrapper.classList.contains("active")) {
          alert(
            "Seçiminizi yapmadan önce lütfen görselinizi ilgili alana sürükleyiniz!"
          );
        }
      });
    });
  }
  onClickBtnsEvent() {
    const metricsBtns = document.querySelectorAll(
      ".create-project-scales-rgh button"
    );
    const btnsOffer = document.querySelector(
      "#create-project-form .btn, #create-project-form-3d .btn"
    );
    const dragImgWrapper = document.querySelector(".drag-area");

    metricsBtns.forEach((btn) => {
      btn.addEventListener("click", function (event) {
        //add class control
        if (this.classList.contains("active")) {
          this.classList.remove("active");
        } else {
          const selectedBtn = document.querySelectorAll(
            ".create-project-scales-rgh button.active"
          );
          selectedBtn.forEach((selected) => {
            selected.classList.remove("active");
          });
        }
        this.classList.add("active");
        if (!dragImgWrapper.classList.contains("active")) {
          alert(
            "Metrik alanını seçmeden önce lütfen görselinizi ilgili alana sürükleyiniz!"
          );
          this.classList.remove("active");
        }
        //name value
        btnsOffer.setAttribute("metric", event.target.name);
      });
    });
  }
}

export default Metrics;
