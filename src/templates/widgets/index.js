//import { quadrapleBanner } from "./quadraple-banner";
import CreateProject from "./create-project";
import SolutionEasyBanner from "./quick-solution-easy-use";
import { Thermoplastics } from "./thermoplastics";
import BenefitsBrandBanner from "./benefits-brands";
import CreateProjectBanner from "./create-project-banner";

import Blog from "./blog";

class Widgets {
  constructor() {
    //new CreateProject();
    new SolutionEasyBanner();
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
import "Images/hero_type_single_mb.jpg";
import "Images/hero_type_single.jpg";
