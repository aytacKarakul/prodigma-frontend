import modalPopup from "../../../../components/web-component/modal";
import tecnicGraphUpload from "../tecnicGraphUpload";

class Metal {
  constructor() {
    this.sacMetalWrapper = document.querySelector(".create-project-metal");

    this.test();
  }
  test() {
    if (this.sacMetalWrapper) {
      tecnicGraphUpload();
    }
  }
}

const modalCncFunction = () => {
  console.log("Modal Success");

  let modalTemplate = document.createElement("div");
  modalTemplate.setAttribute("id", "modal-metal");
  modalTemplate.className = "modal";

  modalTemplate.innerHTML = `
    <div class="modal-bg modal-exit"></div>
    <div class="modal-container">
        <button class="modal-close modal-exit"><i class="icon icon-close"></i></button>    
        <h1>Metal Sac İşleme Fiyat Teklifi</h1>
        <h2>Fiyat teklifi talebiniz alınmıştır. Mümkün olan en kısa sürede projenizi inceleyip <strong>deniz.zileli@ozu.edu.tr</strong> e-posta adresine dönüş yapacağız.</h2>
        <button class="btn btn-medium btn-green modal-exit">Tamam</button>
    </div>
    `;

  document.body.appendChild(modalTemplate);
  modalPopup();
};

export default Metal;
