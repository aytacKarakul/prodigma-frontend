//import { quadrapleBanner } from "./quadraple-banner";
import BenefitsBrandBanner from "./benefits-brands";
import Blog from "./blog";
import { Thermoplastics } from "./thermoplastics";
import CreateProject from "./create-project";
import CreateProjectBanner from "./create-project-banner";

class Widgets {
  constructor() {
    new CreateProject();
    new CreateProjectBanner();
    new BenefitsBrandBanner();
    new Blog();
    //quadrapleBanner();
    Thermoplastics();
  }
}

export default Widgets;

import "Images/hakkimizda_hero.jpg";
import "Images/hakkimizda_hero_sm.jpg";
