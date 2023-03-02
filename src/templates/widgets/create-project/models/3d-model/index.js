import axios from "axios";
import { apitoken } from "../../../../auth/authentication";
import Materials from "../materials";
import { Viewer } from "../viewer";
import { stepSelection } from "../stepSelection";
import PieceModel from "../pieceEnter";
import Metrics from "../metrics";

class Model3D {
  constructor() {
    this.printingWrapper = document.querySelector(".create-project-printing");
    this.initModelFunc();
  }

  initModelFunc() {
    if (this.printingWrapper) {
      //firts init
      new Metrics();
      this.initFirstFunc();
      this.createProject();

      //function detected
      Viewer();
      stepSelection();

      //last init
      this.onLoadMaterials();
    }
  }
  async onLoadMaterials() {
    const locationCatParams = window.location.search;
    // Further parsing:
    const params = new URLSearchParams(locationCatParams);
    const cat = parseInt(params.get("cat")); // is the number

    await axios
      .get(`${process.env.API_KEY}` + "/materials/get-category/" + `${cat}`, {
        auth: {
          username: "prodigma3d",
          password: apitoken,
        },
      })
      .then(function (res) {
        res.data.forEach((data) => {
          new Materials(
            data.id,
            data.kategori_id,
            data.isim,
            data.fiyat,
            data.sira,
            data.durum
          );
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  initFirstFunc() {
    new PieceModel();
  }
  async createProject() {
    const btnPriceOffer = document.querySelector(
      ".create-project-right-nextbtn .btn-next-bid"
    );
    const createProjectFrom = document.querySelector("#create-project-form-3d");

    createProjectFrom.addEventListener("submit", (e) => {
      e.preventDefault();

      const pieceInput = document.querySelector("#js-create_project_piece");
      const modalPopup = document.querySelector("#modal-metal");

      const user_login_hash = localStorage.getItem("login_hash");
      const user_login_id = JSON.parse(user_login_hash);

      //Offer Button

      /*
      const user_uyeId = user_login_id.id;
      const user_kategoriId = btnPriceOffer.getAttribute("cat");
      const user_metricId = btnPriceOffer.getAttribute("metric");
      const user_malzemeId = btnPriceOffer.getAttribute("id");
      const user_toleransId = btnPriceOffer.getAttribute("tolerans");
      const user_img = btnPriceOffer.getAttribute("img");
      const userTecnicFile = btnPriceOffer.getAttribute("file");
      const user_piece = pieceInput.value;
      const user_genislik = btnPriceOffer.getAttribute("genislik");
      const user_yukseklik = btnPriceOffer.getAttribute("yukseklik");
      const user_derinlik = btnPriceOffer.getAttribute("derinlik");
      const user_catname = btnPriceOffer.getAttribute("isim");

      var createFormData = new FormData(createProjectFrom);
      createFormData.append("uye_id", user_uyeId);
      createFormData.append("kategori_id", user_kategoriId);
      createFormData.append("metrik_id", user_metricId);
      createFormData.append("malzeme_id", user_malzemeId);
      createFormData.append("tolerans_id", user_toleransId);
      createFormData.append("cad_dosyasi", user_img);
      createFormData.append("teknik_cizim", userTecnicFile);
      createFormData.append("adet", user_piece);
      createFormData.append("genislik", user_genislik);
      createFormData.append("yukseklik", user_yukseklik);
      createFormData.append("derinlik", user_derinlik);
      createFormData.append("olcek", null);

      axios
        .post(`${process.env.API_KEY}` + "/project/create", createFormData, {
          auth: {
            username: "prodigma3d",
            password: `${apitoken}`,
          },
        })
        .then((res) => {
          console.log(res);
          //alert(.data.message);
          modalPopup.classList.add("open");
        })
        .catch((err) => console.log(err));

        */
    });
  }
}

export default Model3D;
