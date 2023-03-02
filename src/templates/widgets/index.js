import { quadrapleBanner } from "./quadraple-banner";
import BenefitsBrandBanner from "./benefits-brands";
import Blog from "./blog";
import { Thermoplastics } from "./thermoplastics";
import CreateProject from "./create-project";

class Widgets {
  constructor() {
    new CreateProject();
    new BenefitsBrandBanner();
    new Blog();
    quadrapleBanner();
    Thermoplastics();
  }
}

export default Widgets;
