import "Images/favicon.ico";
import "Theme/base.scss";
import "./index.scss";


import getApiToken from "./templates/auth/authentication";
import Partials from "Partials";
import Components from "Components";
import Widgets from "./templates/widgets";
import Flatpages from "./templates/flatpages";
import Basket from "./templates/basket";

class AppJs {
  constructor() {
    if(localStorage.getItem("apitoken")){
      getApiToken();
    }
    new Partials();
    new Components();
    new Widgets();
    new Flatpages();
    new Basket();
  }
}

new AppJs();
