import axios from "axios";
import { apitoken } from "../../../../auth/authentication";
import { categoryId } from "../../../../utils/getCategoryId";
import { getUserId } from "../../../../utils/localStorage";
import TecnicGraphUpload from "../tecnicGraphUpload";
import PieceModel from "../pieceEnter";
import { Viewer } from "../viewer";
import { stepSelection } from "../stepSelection";
import Metrics from "../metrics";
import OfferModal from "../modalPopup";
class CreateCncCases {
  constructor(id, categoryId, isim) {
    this.id = id;
    this.isim = isim;
    this.categoryId = categoryId;

    this.init();
  }
  init() {
    //create dynamic temp
    let temp = document.createElement("li");
    let tempInputDiv = document.createElement("div");
    let tempInput = document.createElement("input");
    let tempInputLabel = document.createElement("label");

    tempInputDiv.className = "input radio";
    tempInput.setAttribute("type", "radio");
    tempInput.setAttribute("id", this.id);
    tempInput.setAttribute("name", this.categoryId);

    tempInputLabel.setAttribute("for", this.id);
    tempInputLabel.textContent = this.isim;

    temp.appendChild(tempInputDiv);
    tempInputDiv.appendChild(tempInput);
    tempInputDiv.appendChild(tempInputLabel);

    document.querySelector("#js-cnc-cases-wrapper").append(temp);
  }
}

class CncIsleme {
  constructor() {
    this.pageCncProcess = document.querySelector(".page-cnc-process");

    this.initFunc();
  }

  async onLoadCncCase() {
    await axios
      .get(
        `${process.env.API_KEY}` + "/cnc/get-category/" + `${categoryId()}`,
        {
          auth: {
            username: "prodigma3d",
            password: apitoken,
          },
        }
      )
      .then(function (res) {
        res.data.forEach((data) => {
          new CreateCncCases(data.id, data.kategori_id, data.isim);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  initFunc() {
    if (this.pageCncProcess) {
      //firts init
      new OfferModal("CNC İşleme", "cnc");
      new Metrics();
      new PieceModel();
      new TecnicGraphUpload();

      //last init
      this.onLoadCncCase();

      Viewer();
      stepSelection();
      this.createProject();
    }
  }

  async createProject() {
    const createProjectFrom = document.querySelector("#create-project-form");

    const btnPriceOffer = document.querySelector(
      ".create-project-right-nextbtn .btn-next-bid"
    );

    //Selectors
    const tecnicGraphFile = document.querySelector(
      "#create_project_tecnic_file_upload"
    );

    //event trigger
    tecnicGraphFile.onchange = (event) => {
      const teknik_cizim = event.target.files;
      if (teknik_cizim.length > 0) {
        const file = teknik_cizim.item(0);
        btnPriceOffer.setAttribute("file", file.name);
      }
    };

    const pieceInput = document.querySelector("#js-create_project_piece");
    const modalPopup = document.querySelector("#modal-cnc");

    const cncOtherNote = document.querySelector(
      "#js-project-right-cnc-other-note"
    );

    createProjectFrom.addEventListener("submit", function (e) {
      e.preventDefault();

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
        const user_metricId = btnPriceOffer.getAttribute("metric");
        const user_cncIslemeId = btnPriceOffer.getAttribute("cnc_isleme");
        const user_img = btnPriceOffer.getAttribute("img");
        const userTecnicFile = btnPriceOffer.getAttribute("file");
        const user_piece = pieceInput.value;
        const user_genislik = btnPriceOffer.getAttribute("genislik");
        const user_yukseklik = btnPriceOffer.getAttribute("yukseklik");
        const user_derinlik = btnPriceOffer.getAttribute("derinlik");

        const createFormData = new FormData(createProjectFrom);
        createFormData.append("uye_id", getUserId());
        createFormData.append("kategori_id", categoryId());
        createFormData.append("metrik_id", user_metricId);
        createFormData.append("malzeme_id", materialId);
        createFormData.append("cnc_isleme", user_cncIslemeId);
        createFormData.append("cad_dosyasi", user_img);
        createFormData.append("teknik_cizim", userTecnicFile);
        createFormData.append("adet", user_piece);
        createFormData.append("genislik", user_genislik);
        createFormData.append("yukseklik", user_yukseklik);
        createFormData.append("derinlik", user_derinlik);
        createFormData.append("diger_malzeme", cncOtherNote.value);

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

export default CncIsleme;
