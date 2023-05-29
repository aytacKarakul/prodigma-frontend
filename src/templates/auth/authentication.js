import axios from "axios";

const setApi = () => {
  axios
  .get(`${process.env.API_KEY}` + "/token")
  .then((res) => {
    let data = res.data;
    localStorage.setItem("apitoken", data);
    return data;
  })
  .catch((err) => console.log(err));
}

const getApi = () => {
  const token = localStorage.getItem("apitoken");
  return this.token;
}

export default (getApi, setApi);

export let apitoken = (data) => {
  return data;
};