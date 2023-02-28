import axios from "axios";
import { apitoken } from "../../../../auth/authentication";

class Model3D {
  constructor() {
    this.printingWrapper = document.querySelector(".create-project-printing");
    this.getCategoriesFromId();
  }

  getCategoriesFromId() {
    if (this.printingWrapper) {
      const locationCatParams = window.location.search;
      // Further parsing:
      const params = new URLSearchParams(locationCatParams);
      const cat = parseInt(params.get("cat")); // is the number

      axios
        .get(`${process.env.API_KEY}` + "/materials/get-category/" + `${cat}`, {
          auth: {
            username: "prodigma3d",
            password: apitoken,
          },
        })
        .then(function (response) {
          console.log(response);
          if (response.data !== null) {
            let wrapper = document.querySelector(
              ".create-project-right-materials"
            );
            response.data.map((materials) => {
              let template = document.createElement("li");
              template.innerHTML += `
              <div class="input radio">
              <input type="radio" kategori_id=${materials.kategori_id} case=${materials.durum} fiyat=${materials.fiyat} />
              <label for="js-material-keys">${materials.isim}</label>
              </div>`;
              wrapper.appendChild(template);
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
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

export default Model3D;
