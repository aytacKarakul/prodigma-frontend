import { quadrapleBanner } from "./quadraple-banner";
import BenefitsBrandBanner from "./benefits-brands";
import Blog from "./blog";
import { Thermoplastics } from "./thermoplastics";
import getMaterials from "./polimers";
import customViewer from "./create-project/models/viewer";
import getAllCategories from "./create-project/slider";
import login from "../components/forms/register-forms/login";

class Widgets {
  constructor() {
    login();
    getAllCategories();
    quadrapleBanner();
    new BenefitsBrandBanner();
    new Blog();
    Thermoplastics();
    getMaterials();
    customViewer();
  }
}

export default Widgets;
