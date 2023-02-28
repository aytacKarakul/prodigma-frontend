class PieceModel {
  constructor() {
    this.elementWrap = document.querySelector(
      ".create-project-right-append-elements"
    );

    this.initPieceModelFun();
    this.onChangeData();
  }
  initPieceModelFun() {
    if (this.elementWrap) {
      //template create
      let tempDiv = document.createElement("div");
      tempDiv.className = "create-project-right-piece";

      let tempDivWrap = document.createElement("div");
      tempDivWrap.className = "create-project-right-piece-wrap";

      let tempDivInput = document.createElement("input");
      tempDivInput.setAttribute("type", "number");
      tempDivInput.setAttribute("min", "1");
      tempDivInput.setAttribute("max", "30");

      let tempDivIncreaseAnchor = document.createElement("a");
      tempDivIncreaseAnchor.className = "increase";
      tempDivIncreaseAnchor.setAttribute("href", "javascript:void(0);");

      let tempDivDecreaseAnchor = document.createElement("a");
      tempDivDecreaseAnchor.className = "decrease";
      tempDivDecreaseAnchor.setAttribute("href", "javascript:void(0);");

      let tempDivDecreaseAnchorIcon = document.createElement("i");
      tempDivDecreaseAnchorIcon.className = "icon icon-minus";

      let tempDivIncreaseAnchorIcon = document.createElement("i");
      tempDivIncreaseAnchorIcon.className = "icon icon-plus";

      // template element append
      tempDiv.append(tempDivWrap);
      tempDivWrap.append(tempDivInput);
      tempDivWrap.append(tempDivIncreaseAnchor);
      tempDivWrap.append(tempDivDecreaseAnchor);
      tempDivDecreaseAnchor.appendChild(tempDivDecreaseAnchorIcon);
      tempDivIncreaseAnchor.appendChild(tempDivIncreaseAnchorIcon);

      this.elementWrap.append(tempDiv);
    }
  }
  onChangeData() {
    const pieceWrap = document.querySelector(".create-project-right-piece");

    if (pieceWrap) {
      const increaseBtn = document.querySelector(
        ".create-project-right-piece .increase"
      );
      const decreaseBtn = document.querySelector(
        ".create-project-right-piece .decrease"
      );

      let pieceVal = document.querySelector(
        ".create-project-right-piece input[type='number']"
      );
      pieceVal.value = 1;

      increaseBtn.onclick = function () {
        pieceVal.value++;
      };
      decreaseBtn.onclick = function (e) {
        if (pieceVal.value <= 1) {
          pieceVal.value = 1;
        } else {
          pieceVal.value--;
        }
      };
    }
  }
}

export default PieceModel;
