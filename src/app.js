import axios from "axios";
import "Images/favicon.ico";
import "Theme/base.scss";
import "./index.scss";

import Partials from "Partials";
import Components from "Components";
import Widgets from "./templates/widgets";
import Flatpages from "./templates/flatpages";
//import Basket from "./templates/basket";

class AppJs {
  constructor() {
    let apiToken = axios
      .get(`${process.env.API_KEY}` + "/token")
      .then((res) => {
        let data = res.data;
        localStorage.setItem("apitoken", data);
        return data;
      })
      .catch((err) => console.log(err));

    const promise1 = Promise.resolve(apiToken);
    promise1.then((value) => {
      if(value){
        new Partials();
        new Components();
        new Widgets();
        new Flatpages();
      }
    });
  }
}
new AppJs();
