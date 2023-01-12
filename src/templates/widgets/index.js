import { quadrapleBanner } from "./quadraple-banner";
import BenefitsBrandBanner from "./benefits-brands";
import { CountDown } from "./blog";

class Widgets {
    constructor(){
        quadrapleBanner();
        new BenefitsBrandBanner();
        CountDown();
    }
}

export default Widgets;