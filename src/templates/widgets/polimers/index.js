import axios from "axios";

let token;
let materials;

export default async function getMaterials () {
    
    await axios.get("https://prodigma3d.rengaver.com/Api/token")
    .then((res) => token=res.data)
    .catch((err) => console.log(err))
    

    await axios.get("https://prodigma3d.rengaver.com/Api/materials/get", {
        auth: {
            username: 'prodigma3d',
            password: `${token}`
        }
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))


    await axios.get(`https://prodigma3d.rengaver.com/Api/materials/get/${9}`, {
        auth: {
            username: 'prodigma3d',
            password: `${token}`
        }
    })
    .then((res) => materials=res.data)
    .catch((err) => console.log(err))
    console.log(materials.id)
}