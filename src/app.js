import axios from "axios";
import "Images/favicon.ico";
import "Theme/base.scss";
import "./index.scss";

import Partials from "Partials";
import Components from "Components";
import Widgets from "./templates/widgets";
import Flatpages from "./templates/flatpages";
//import Basket from "./templates/basket";

axios
  .get(`${process.env.API_KEY}` + "/token")
  .then((res) => {
    let data = res.data;
    localStorage.setItem("apitoken", data);
    return data;
  })
  .catch((err) => console.log(err));

class AppJs {
  constructor() {
    setTimeout(() => {
      new Partials();
      new Components();
      new Widgets();
      new Flatpages();
      //new Basket();
    }, 500);
  }
}
new AppJs();