export function Thermoplastics() {
  const materialsBtns = document.querySelectorAll(
    ".pmaterials-thermoplastics-content li .pmaterials-thermoplastics-content-material-detail a"
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
  }
  if (modalExitBtns) {
    modalExitBtns.forEach((btn) => {
      btn.addEventListener("click", function (event) {
        this.parentElement.parentElement.classList.remove("open");
      });
    });
  }
}

import "Upload/beyaz-naylon.jpg";
import "Upload/onyx-esd.jpg";
import "Upload/onyx-fr-onyx-fra.jpg";
import "Upload/karbon-fiber-fra.jpg";
import "Upload/onyx.jpg";
import "Upload/ppla-beyaz.jpg";
import "Upload/ppla-kirmizi.jpg";
import "Upload/ppla-mavi.jpg";
import "Upload/ppla-sari.jpg";
import "Upload/ppla-siyah.jpg";
import "Upload/ppla-turuncu.jpg";
import "Upload/ppla-yesil.jpg";
import "Upload/pppla-gri.jpg";
