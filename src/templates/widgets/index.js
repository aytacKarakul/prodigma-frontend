import { quadrapleBanner } from "./quadraple-banner";
import BenefitsBrandBanner from "./benefits-brands";
import Blog from "./blog";
import { Thermoplastics } from "./thermoplastics";

class Widgets {
  constructor() {
    quadrapleBanner();
    new BenefitsBrandBanner();
    new Blog();
    Thermoplastics();
  }
}

export default Widgets;
