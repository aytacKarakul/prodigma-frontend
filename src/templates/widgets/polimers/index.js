export function Polimers() {
  const materialsBtns = document.querySelectorAll(
    ".pmaterials-polimers-content .pmaterials-polimers-content-material-detail a"
  );
  const modalExitBtns = document.querySelectorAll(".modal .modal-exit");
  if (materialsBtns) {
    materialsBtns.forEach((items) => {
      items.addEventListener("click", function () {
        const attr = this.getAttribute("data-attr");
        const modalAttr = this.nextSibling.getAttribute("data-attr");
        const modalAttrId = this.nextSibling;
        if (attr === modalAttr) {
          modalAttrId.classList.add("open");
        } else {
          console.log("Bulunamadı");
        }
      });
    });
    if (modalExitBtns) {
      modalExitBtns.forEach((btn) => {
        btn.addEventListener("click", function (event) {
          this.parentElement.parentElement.classList.remove("open");
        });
      });
    }
  }
}

import "Upload/a2-d2-takim-celigi.jpg";
import "Upload/bakir.jpg";
import "Upload/h13-takim-celigi.jpg";
import "Upload/inconel-625.jpg";
import "Upload/paslanmaz-celik.jpg";
