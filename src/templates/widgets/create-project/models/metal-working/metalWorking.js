import modalPopup from "../../../../components/web-component/modal";
import tecnicGraphUpload from "../tecnicGraphUpload";
import { apitoken } from "../../../../auth/authentication";
import axios from "axios";

class Metal {
  constructor() {
    this.sacMetalWrapper = document.querySelector(".create-project-metal");

    this.sacMetalInıt();
    this.queryParamsFunc();
  }
  sacMetalInıt() {
    if (this.sacMetalWrapper) {
      tecnicGraphUpload();
    }
  }

  queryParamsFunc() {
    if (this.sacMetalWrapper) {
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
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log(cat);
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
