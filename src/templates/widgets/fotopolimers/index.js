export function Fotopolimers() {
  const materialsBtns = document.querySelectorAll(
    "#pmaterials-fotopolimers .pmaterials-metals-content-material-detail a"
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

import "Upload/abs-like-white.jpg";
import "Upload/abs-like-brown.jpg";
import "Upload/clear.jpg";
import "Upload/flexible.jpg";
import "Upload/perfomax-beyaz.jpg";
import "Upload/proABS.jpg";
import "Upload/proBlack.jpg";
import "Upload/proCLEAR.jpg";
import "Upload/proFLEX.jpg";
import "Upload/proPEEK.jpg";
import "Upload/proto45-beyaz.jpg";
import "Upload/proto410.jpg";
