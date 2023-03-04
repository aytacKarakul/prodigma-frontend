import axios from "axios";
import { apitoken } from "../../../../auth/authentication";
import { categoryId } from "../../../../utils/getCategoryId";
import Materials from "../materials";
import { Viewer } from "../viewer";
import { stepSelection } from "../stepSelection";
import PieceModel from "../pieceEnter";
import Metrics from "../metrics";

class CreatePlasticTypes {
  constructor(id, kategori_id, isim, sira, fiyat) {
    this.id = id;
    this.kategori_id = kategori_id;
    this.isim = isim;
    this.sira = sira;
    this.fiyat = fiyat;

    this.createTemplate();
  }
  createTemplate() {
    //template li create
    let tempLi = document.createElement("li");
    let tempDiv = document.createElement("div");
    tempDiv.className = "input radio";

    //template li > div > input create
    let tempInput = document.createElement("input");
    tempInput.setAttribute("type", "radio");
    tempInput.setAttribute("id", this.id);
    tempInput.setAttribute("price", this.fiyat);
    tempInput.setAttribute("cat", this.kategori_id);
    tempInput.setAttribute("name", "plastic");

    //template li > div > label create
    let tempLabel = document.createElement("label");
    tempLabel.setAttribute("for", "js-plactics-keys");
    tempLabel.textContent = this.isim;

    //append elements
    tempLi.append(tempDiv);
    tempDiv.append(tempInput);
    tempDiv.append(tempLabel);

    document
      .querySelector("#create-project-right-plastic-type")
      .appendChild(tempLi);
  }
}

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
      this.onLoadPlasticType();
    }
  }
  async onLoadMaterials() {
    await axios
      .get(
        `${process.env.API_KEY}` +
          "/materials/get-category/" +
          `${categoryId()}`,
        {
          auth: {
            username: "prodigma3d",
            password: apitoken,
          },
        }
      )
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
  async onLoadPlasticType() {
    await axios
      .get(`${process.env.API_KEY}` + "/plastic/get-category/" + categoryId(), {
        auth: {
          username: "prodigma3d",
          password: `${apitoken}`,
        },
      })
      .then(function (res) {
        if (res.data == null) {
          alert("Plastik Türleri Yeklenmedi!");
        } else {
          res.data.forEach((item) => {
            console.log(item);
            new CreatePlasticTypes(
              item.id,
              item.kategori_id,
              item.isim,
              item.sira,
              item.fiyat,
              item.durum
            );
          });
        }
      })
      .catch((err) => console.log(err));
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

      const radiosBtns = document.querySelectorAll(
        ".create-project-right-plastic-type li .radio input"
      );
      var selectedRadios = Array.from(radiosBtns).find(
        (radio) => radio.checked
      );
      const plasticId = selectedRadios.getAttribute("id");

      const pieceInput = document.querySelector("#js-create_project_piece");
      const modalPopup = document.querySelector("#modal-metal");

      const user_login_hash = localStorage.getItem("login_hash");
      const user_login_id = JSON.parse(user_login_hash);

      //Offer Button

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

      var createFormData = new FormData(createProjectFrom);
      createFormData.append("uye_id", user_uyeId);
      createFormData.append("kategori_id", user_kategoriId);
      createFormData.append("metrik_id", user_metricId);
      createFormData.append("malzeme_id", user_malzemeId);
      createFormData.append("tolerans_id", user_toleransId);
      createFormData.append("plastik_id", plasticId);
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
    });
  }
}

export default Model3D;
