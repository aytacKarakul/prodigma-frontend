import { apitoken } from "../../../../auth/authentication";
import axios from "axios";
//import ScaleModel from "../scaleModule";

class Silicon {
  constructor() {
    this.printingWrapper = document.querySelector(".create-project-printing");
    this.queryParamsFunc3D();
  }

  queryParamsFunc3D() {
    if (this.printingWrapper) {
      const locationCatParams = window.location.search;
      // Further parsing:
      const params = new URLSearchParams(locationCatParams);
      const cat = parseInt(params.get("cat")); // is the number

      axios
        .get(`${process.env.API_KEY}` + "/materials/get/" + `${cat}`, {
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
            let template = document.createElement("li");
            template.innerHTML += `
            <div class="input radio">
            <input type="radio" kategori_id=${response.data.kategori_id} case=${response.data.durum} fiyat=${response.data.fiyat} />
            <label for="js-material-keys">${response.data.isim}</label>
            </div>
          `;
            wrapper.append(template);
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

export default Silicon;
