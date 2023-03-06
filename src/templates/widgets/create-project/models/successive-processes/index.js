import axios from "axios";
import { apitoken } from "../../../../auth/authentication";
import { getUserId } from "../../../../utils/localStorage";
import { categoryId } from "../../../../utils/getCategoryId";
import OfferModal from "../modalPopup";

class PostProcess {
  constructor() {
    this.pageWrapper = document.querySelector(".page-successive-processes");
    this.postProcessForm = document.querySelector("#form-post-process");

    this.initFunc();
  }
  initFunc() {
    if (this.pageWrapper) {
      new OfferModal("Prodigma PostProcess", "post-process");
      this.onLoadMaterials();
      this.createPostProcessFunc();
    }
  }
  async onLoadMaterials() {
    const materialSelect = document.querySelector(
      "select#js-post-process-material-list"
    );
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
        if (res.data.status == 0) {
          let tempError = document.createElement("div");
          tempError.textContent = res.data.message;
          alert(tempError);
        } else {
          res.data.forEach((element) => {
            let option = document.createElement("option");
            option.setAttribute("id", element.id);
            option.textContent = element.isim;
            materialSelect.appendChild(option);
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  createPostProcessFunc() {
    this.postProcessForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const modalPopup = document.querySelector("#modal-post-process");
      const inputMaterialUI = document.querySelector(
        "#js-post-process-material-list"
      );
      const inputNoteUI = document.querySelector(
        "#js-post-process-note-input"
      ).value;
      const inputDateUI = document.querySelector(
        "#js-post-process-date-input"
      ).value;
      const inputTimeUI = document.querySelector(
        "#js-post-process-time-input"
      ).value;

      //--
      const selectedMaterial =
        inputMaterialUI.options[inputMaterialUI.selectedIndex];

      if (inputNoteUI == "") {
        console.log("Lütfen ilgili alanları boş geçmeyiniz!");
      } else if (inputDateUI == "") {
        console.log("Lütfen ilgili alanları boş geçmeyiniz!");
      } else if (inputTimeUI == "") {
        console.log("Lütfen ilgili alanları boş geçmeyiniz!");
      } else {
        const formData = new FormData(this.postProcessForm);

        formData.append("uye_id", getUserId());
        formData.append("kategori_id", categoryId());
        formData.append("malzeme_id", selectedMaterial.id);
        formData.append("aciklama", inputNoteUI);
        formData.append("tarih", inputDateUI);
        formData.append("saat", inputTimeUI);

        axios
          .post(`${process.env.API_KEY}` + "/project/create", formData, {
            auth: {
              username: "prodigma3d",
              password: `${apitoken}`,
            },
          })
          .then((res) => {
            res.data;
            modalPopup.classList.add("open");
          })
          .catch((err) => console.log(err));
      }
    });
  }
}
export default PostProcess;
