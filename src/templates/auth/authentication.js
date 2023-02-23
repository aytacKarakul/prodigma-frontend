import axios from "axios";

function getApiToken() {
  axios
    .get("https://prodigma3d.rengaver.com/Api/token")
    .then((res) => localStorage.setItem("apitoken", res.data))
    .catch((err) => console.log(err));
}
export default getApiToken;
