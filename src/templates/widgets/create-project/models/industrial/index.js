import "Images/printing-page-cover.jpg";
import axios from "axios";
import { apitoken } from "../../../../auth/authentication";
import { getUserId } from "../../../../utils/localStorage";
import { categoryId } from "../../../../utils/getCategoryId";
import OfferModal from "../modalPopup";

class Industrial {
  constructor() {
    const pageWrapper = document.querySelector(".page-industrial");

    this.IndustrialForm = document.querySelector("#industrial-form-save");
    this.expertButton = document.querySelector("#js-industrial-expert-send");

    if (pageWrapper) {
      new OfferModal("Endüstriyel Tasarım");
      this.onSubmitEvent();
    }
  }

  onSubmitEvent() {
    this.IndustrialForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const inputDesc = document.querySelector(
        "#js-industrial-description-input"
      );
      const btnDate = document.querySelector("#js-industrial-date-input");
      const inputHour = document.querySelector("#js-industrial-date-hours");
      const modalPopup = document.querySelector("#modal-metal");

      const strDescription = inputDesc.value.trim();
      const strDate = btnDate.value;
      const strHour = inputHour.value;

      // Form Data
      const formData = new FormData(this.IndustrialForm);
      formData.append("uye_id", getUserId());
      formData.append("kategori_id", categoryId());
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
            console.log(res.data);
            modalPopup.classList.add("open");
          }
        })
        .catch((err) => console.log(err));
    });
  }
}

export default Industrial;
