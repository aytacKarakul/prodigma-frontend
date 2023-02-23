import axios from "axios";

export default async function getMaterials() {
  let materials;
  let apitoken = localStorage.getItem("apitoken");
  console.log(apitoken);
  await axios
    .get("https://prodigma3d.rengaver.com/Api/materials/get", {
      auth: {
        username: "prodigma3d",
        password: `${apitoken}`,
      },
    })
    .then((res) => console.log(res.data))
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

function tempLitarature() {
  let temp = document.createElement("li");
  let container = document.querySelector(".pmaterials-thermoplastics-content");
  temp.className = "pmaterials-thermoplastics-content-material";

  temp.innerHTML += `
  <div class="pmaterials-thermoplastics-content-material-img"><picture> <source media="(max-width: 1024px)" srcset="https://via.placeholder.com/300"><source media="(min-width: 1025px)" srcset="https://via.placeholder.com/285x285"><img src="https://via.placeholder.com/300" alt="img alt"></picture></div>
  `;
  container.append(temp);
  return temp;
}

//tempLitarature();
