import axios from "axios";
import { apitoken } from "../../../../auth/authentication";
import { getUserId } from "../../../../utils/localStorage";
import { categoryId } from "../../../../utils/getCategoryId";
import ExpertModal from "../expertModalPopup";

class CreateElement {
  constructor(id, text, categoryId) {
    this.id = id;
    this.text = text;
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
    tempInput.setAttribute("id", this.categoryId);
    tempInput.setAttribute("name", this.id);

    tempInputLabel.setAttribute("for", this.id);
    tempInputLabel.textContent = this.text;

    temp.appendChild(tempInputDiv);
    tempInputDiv.appendChild(tempInput);
    tempInputDiv.appendChild(tempInputLabel);

    document.querySelector("#reverse-engineer-question").append(temp);
  }
}

class ReverseEngineer {
  constructor() {
    const pageWrapper = document.querySelector(".page-reverse-engineering");

    this.ReverseEngineeForm = document.querySelector("#reverse-engineer-form");
    this.reverseEngineerTemp = document.querySelector(
      "#reverse-engineer-question"
    );

    if (pageWrapper) {
      new ExpertModal(
        "3D Tarama ve Tersine Mühendislik",
        "reverse-enginee-modal"
      );
      this.onLoadQuestions();
      this.onSubmitEvent();
    }
  }
  async onLoadQuestions() {
    await axios
      .get(
        `${process.env.API_KEY}` + "/question/get-category/" + categoryId(),
        {
          auth: {
            username: "prodigma3d",
            password: `${apitoken}`,
          },
        }
      )
      .then(function (res) {
        if (res.data == null) {
          alert("Soru setleri Yeklenmedi!");
        } else {
          res.data.forEach((item) => {
            new CreateElement(item.kategori_id, item.secenek, item.id);
          });
        }
      })
      .catch((err) => console.log(err));
  }

  onSubmitEvent() {
    this.ReverseEngineeForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const inputDesc = document.querySelector(
        "#js-reverse-engineer-description-input"
      );
      const btnDate = document.querySelector("#js-reverse-engine-date-input");
      const inputHour = document.querySelector("#js-reverse-engine-time-input");
      const modalPopup = document.querySelector("#reverse-enginee-modal");
      const rediosBtns = document.querySelectorAll(
        "#reverse-engineer-question li .radio input"
      );

      const strDescription = inputDesc.value.trim();
      const strDate = btnDate.value;
      const strHour = inputHour.value;
      var selectedRadios = Array.from(rediosBtns).find(
        (radio) => radio.checked
      );
      const questionId = selectedRadios.getAttribute("id");

      //Form Data
      const formData = new FormData(this.ReverseEngineeForm);
      formData.append("uye_id", getUserId());
      formData.append("kategori_id", categoryId());
      formData.append("soru_id", questionId);
      formData.append("aciklama", strDescription);
      formData.append("tarih", strDate);
      formData.append("saat", strHour);

      axios
        .post(`${process.env.API_KEY}` + "/project/create", formData, {
          auth: {
            username: "prodigma3d",
            password: `${apitoken}`,
          },
        })
        .then(function (res) {
          if (res.data.message) {
            modalPopup.classList.add("open");
          }
        })
        .catch((err) => console.log(err));
    });
  }
}

export default ReverseEngineer;

import "Images/printing-page-cover.jpg";
