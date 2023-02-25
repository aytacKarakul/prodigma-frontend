import { quadrapleBanner } from "./quadraple-banner";
import BenefitsBrandBanner from "./benefits-brands";
import Blog from "./blog";
import { Thermoplastics } from "./thermoplastics";
import CreateProject from "./create-project";

class Widgets {
  constructor() {
    new CreateProject();
    quadrapleBanner();
    new BenefitsBrandBanner();
    new Blog();
    Thermoplastics();
  }
}

export default Widgets;
