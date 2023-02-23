import { quadrapleBanner } from "./quadraple-banner";
import BenefitsBrandBanner from "./benefits-brands";
import Blog from "./blog";
import { Thermoplastics } from "./thermoplastics";
//import getCategories from "./services-banner";
import getMaterials from "./polimers";

class Widgets {
  constructor() {
    quadrapleBanner();
    new BenefitsBrandBanner();
    new Blog();
    Thermoplastics();
    getMaterials();
    //getCategories();
  }
}

export default Widgets;
