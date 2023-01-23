import { quadrapleBanner } from "./quadraple-banner";
import BenefitsBrandBanner from "./benefits-brands";
import Blog from "./blog";

class Widgets {
  constructor() {
    quadrapleBanner();
    new BenefitsBrandBanner();
    new Blog();
  }
}

export default Widgets;
