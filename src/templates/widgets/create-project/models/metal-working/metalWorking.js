import axios from "axios";
import modalPopup from "../../../../components/web-component/modal";
import { apitoken } from "../../../../auth/authentication";
import Materials from "../materials";
import Tolerans from "../tolerans";
import PieceModel from "../pieceEnter";
import TecnicGraphUpload from "../tecnicGraphUpload";

class Metal {
  constructor() {
    this.sacMetalWrapper = document.querySelector(".create-project-metal");

    this.init();
  }
  init() {
    if (this.sacMetalWrapper) {
      this.getMetalCatMaterials();
      this.getToleransFromCategory();
      this.postPieceFunc();
      this.postUploadFile();
    }
  }
  postPieceFunc() {
    new PieceModel();
  }
  postUploadFile() {
    new TecnicGraphUpload("file.jpg");
  }
  getMetalCatMaterials() {
    if (this.sacMetalWrapper) {
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
        .then(function (res) {
          if (res.data !== null) {
            res.data.map((data) => {
              new Materials(
                data.id,
                data.kategori_id,
                data.isim,
                data.fiyat,
                data.sira,
                data.durum
              );
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  getToleransFromCategory() {
    if (this.sacMetalWrapper) {
      const locationCatParams = window.location.search;
      // Further parsing:
      const params = new URLSearchParams(locationCatParams);
      const cat = parseInt(params.get("cat")); // is the number

      axios
        .get(`${process.env.API_KEY}` + "/tolerance/get-category/" + `${cat}`, {
          auth: {
            username: "prodigma3d",
            password: apitoken,
          },
        })
        .then(function (response) {
          if (response.data !== null) {
            response.data.map((tolerans) => {
              new Tolerans(
                tolerans.id,
                tolerans.kategori_id,
                tolerans.isim,
                tolerans.fiyat,
                tolerans.sira,
                tolerans.durum
              );
            });
          }
          console.log(response);
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

export default Metal;
