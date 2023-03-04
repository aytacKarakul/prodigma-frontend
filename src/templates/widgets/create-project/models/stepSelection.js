export function stepSelection() {
  const btnSelectionFirst = document.querySelector(
    ".create-project-right-nextbtn .btn-next-to-bid"
  );
  const btnSelectionLast = document.querySelector(
    ".create-project-right-nextbtn .btn-next-bid"
  );
  const stepSelectionBtns = document.querySelectorAll(
    ".create-project-right-steps > .lnk"
  );
  const dataSelectionProporties = document.querySelector(
    ".create-project-right > [data-selection='properties']"
  );
  const dataSelectionMaterials = document.querySelector(
    ".create-project-right > [data-selection='materials']"
  );

  const metricInputWidth = document.querySelector("#js-scales-input-width");
  const metricInputHeight = document.querySelector("#js-scales-input-height");
  const metricInputDepth = document.querySelector("#js-scales-input-depth");

  if (dataSelectionMaterials || dataSelectionProporties) {
    btnSelectionFirst?.addEventListener("click", function () {
      const cncRadiosSelectBtns = document.querySelectorAll(
        "#js-cnc-cases-wrapper li .radio input"
      );
      var selectedRadios = Array.from(cncRadiosSelectBtns).find(
        (radio) => radio.checked
      );
      if (
        metricInputWidth.value == "" ||
        metricInputHeight.value == "" ||
        metricInputDepth.value == ""
      ) {
        alert("Lütfen metrik alanını eksiksiz doldurunuz!");
        metricInputWidth.focus();
      } else if (!selectedRadios) {
        alert("Lütfen Cnc işleme yöntemi seçiniz!");
      } else {
        stepSelectionBtns.forEach((btn) => {
          if (btn.classList.contains("active")) {
            btn.classList.remove("active");
            btn.innerHTML = "";
            btn.classList.add("passed");
          } else {
            const selectedBtn = document.querySelectorAll(
              ".create-project-right-steps > .lnk.active"
            );
            selectedBtn.forEach((selected) => {
              selected.classList.remove("active");
            });
            btn.classList.add("active");
          }
        });
        this.remove();

        dataSelectionProporties.classList.add("hidden");
        dataSelectionMaterials.removeAttribute("hidden");
        btnSelectionLast.setAttribute("cnc_isleme", selectedRadios.id);
        if (btnSelectionLast) {
          btnSelectionLast.style.display = "flex";
          btnSelectionLast.classList.add("btn-green");
          btnSelectionLast.removeAttribute("disabled");
        }
      }
    });
  }
}
