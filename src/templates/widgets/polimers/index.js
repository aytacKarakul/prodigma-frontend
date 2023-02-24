import axios from "axios";

export default async function getMaterials() {
  let apitoken = localStorage.getItem("apitoken");

  await axios
    .get(`${process.env.API_KEY}` + "/materials/get", {
      auth: {
        username: "prodigma3d",
        password: `${apitoken}`,
      },
    })
    .then((res) => {
      let containerSelector = document.querySelector(
        ".pmaterials-polimers-content"
      );
      let temp = document.createElement("li");
      temp.className = "pmaterials-polimers-content-material";

      res.data.map((items) => {
        temp.innerHTML = `
        <div class="pmaterials-polimers-content-material-img">
          <img src="https://via.placeholder.com/300" alt="img alt">
        </div>
        <div class="pmaterials-polimers-content-material-title">${items.isim}</div>
        <div class="pmaterials-polimers-content-material-detail"><a href="#">Malzeme Detayı<i class="icon icon-arrow-right"></i></a></div>
        `;
      });
      containerSelector?.append(temp);
      console.log(res.data.map((item) => item));
    })
    .catch((err) => console.log(err));

  await axios
    .get(`https://prodigma3d.rengaver.com/Api/materials/get/${9}`, {
      auth: {
        username: "prodigma3d",
        password: `${apitoken}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}
