import axios from "axios";

let token;
let categories;

export default async function getCategories() {

    await axios.get("https://prodigma3d.rengaver.com/Api/token")
    .then((res) => token=res.data)
    .catch((err) => console.log(err))

    await axios.get("https://prodigma3d.rengaver.com/Api/categories/get", {
        auth: {
            username: 'prodigma3d',
            password: `${token}`
        }
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))

    await axios.get(`https://prodigma3d.rengaver.com/Api/categories/get/${1}`, {
        auth: {
            username:'prodigma3d',
            password: `${token}`
        }
    })
    .then((res) => categories=res.data)
    .catch((err) => console.log(err))
    console.log(categories);
}