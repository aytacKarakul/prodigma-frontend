export function ContinousFiber() {
  const continousFiberBtns = document.querySelectorAll(
    ".pmaterials-fibers .pmaterials-fibers-content-material .pmaterials-fibers-content-material-detail a"
  );
  const modalExitBtns = document.querySelectorAll(".modal .modal-exit");
  if (continousFiberBtns) {
    continousFiberBtns.forEach((items) => {
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

import "Upload/fiberglas.jpg";
import "Upload/hsht-fiberglas.jpg";
import "Upload/karbon-fiber-fr.jpg";
import "Upload/karbon-fiber-fra.jpg";
import "Upload/karbon-fiber.jpg";
import "Upload/kevlar.jpg";
