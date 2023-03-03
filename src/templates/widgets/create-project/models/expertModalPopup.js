import modalPopup from "../../../components/web-component/modal";

class ExpertModal {
  constructor(name, type) {
    this.name = name;
    this.type = type;

    this.modalInit();
  }
  modalInit() {
    const user = localStorage.getItem("login_hash");
    const user_eposta = JSON.parse(user);

    let modalTemplate = document.createElement("div");
    modalTemplate.setAttribute("id", `${this.type}`);
    modalTemplate.className = "modal";

    modalTemplate.innerHTML = `
    <div class="modal-bg modal-exit"></div>
    <div class="modal-container">
        <button class="modal-close modal-exit"><i class="icon icon-close"></i></button>    
        <h1>${this.name} Fiyat Teklifi</h1>
        <h2>Uzmanımızla görüşme teklifiniz alınmıştır. Mümkün olan en kısa sürede projenizi inceleyip <strong>${
          user_eposta.eposta ? user_eposta.eposta : null
        }</strong> e-posta adresine dönüş yapacağız.</h2>
        <button class="btn btn-medium btn-green modal-exit">Tamam</button>
    </div>`;

    document.body.appendChild(modalTemplate);
    modalPopup();
  }
}

export default ExpertModal;