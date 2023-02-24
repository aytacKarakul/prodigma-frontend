import axios from "axios";

function getApiToken() {
  axios
    .get(`${process.env.API_KEY}` + "/token")
    .then((res) => localStorage.setItem("apitoken", res.data))
    .catch((err) => console.log(err));
}
export let apitoken = localStorage.getItem("apitoken");
export default getApiToken;
