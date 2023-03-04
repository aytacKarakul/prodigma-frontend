import axios from "axios";
import { apitoken } from "../../../../auth/authentication";
import Materials from "../materials";
import Tolerans from "../tolerans";
import PieceModel from "../pieceEnter";
import TecnicGraphUpload from "../tecnicGraphUpload";
import { Viewer } from "../viewer";
import { stepSelection } from "../stepSelection";
import OfferModal from "../modalPopup";
import Metrics from "../metrics";

class Metal {
  constructor() {
    this.modelMetalWrapper = document.querySelector(".create-project-metal");
    this.init();
  }
  init() {
    if (this.modelMetalWrapper) {
      new OfferModal("Sac Metal İşleme");
      //firts init
      new Metrics();
      new PieceModel();
      new TecnicGraphUpload();
      this.initFunc();

      //function detected
      Viewer();
      stepSelection();

      //last init
      this.onLoadMaterials();
      this.onLoadTolerans();
      this.createProject();
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

  async onLoadTolerans() {
    const locationCatParams = window.location.search;
    // Further parsing:
    const params = new URLSearchParams(locationCatParams);
    const cat = parseInt(params.get("cat")); // is the number

    await axios
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
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  initFunc() {
    //Selectors
    const tecnicGraphFile = document.querySelector(
      "#create_project_tecnic_file_upload"
    );
    const btnPriceOffer = document.querySelector(
      ".create-project-right-nextbtn .btn-next-bid"
    );
    //event trigger
    tecnicGraphFile.onchange = (event) => {
      const teknik_cizim = event.target.files;
      if (teknik_cizim.length > 0) {
        const file = teknik_cizim.item(0);
        btnPriceOffer.setAttribute("file", file.name);
      }
    };
  }
  async createProject() {
    const btnPriceOffer = document.querySelector(
      ".create-project-right-nextbtn .btn-next-bid"
    );
    const createProjectFrom = document.querySelector("#create-project-form");

    createProjectFrom.addEventListener("submit", (e) => {
      e.preventDefault();

      const pieceInput = document.querySelector("#js-create_project_piece");
      const modalPopup = document.querySelector("#modal-metal");

      const user_login_hash = localStorage.getItem("login_hash");
      const user_login_id = JSON.parse(user_login_hash);

      const rediosBtns = document.querySelectorAll(
        ".create-project-right-materials li .radio input"
      );
      var selectedRadios = Array.from(rediosBtns).find(
        (radio) => radio.checked
      );
      if (!selectedRadios) {
        alert("Lütfen malmeze seçimi yapınız!");
      } else {
        const materialId = selectedRadios.getAttribute("id");

        //Offer Button
        const user_uyeId = user_login_id.id;
        const user_kategoriId = btnPriceOffer.getAttribute("kategori_id");
        const user_metricId = btnPriceOffer.getAttribute("metric");
        const user_toleransId = btnPriceOffer.getAttribute("tolerans");
        const user_img = btnPriceOffer.getAttribute("img");
        const userTecnicFile = btnPriceOffer.getAttribute("file");
        const user_piece = pieceInput.value;
        const user_genislik = btnPriceOffer.getAttribute("genislik");
        const user_yukseklik = btnPriceOffer.getAttribute("yukseklik");
        const user_derinlik = btnPriceOffer.getAttribute("derinlik");

        const createFormData = new FormData(createProjectFrom);

        createFormData.append("uye_id", user_uyeId);
        createFormData.append("kategori_id", user_kategoriId);
        createFormData.append("metrik_id", user_metricId);
        createFormData.append("malzeme_id", materialId);
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
            modalPopup.classList.add("open");
          })
          .catch((err) => console.log(err));
      }
    });
  }
}

export default Metal;
