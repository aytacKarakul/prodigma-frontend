import Header from "Partials/header";
import MobileHeader from "Partials/mobile";
import Footer from "Partials/footer";

class Partials {
  constructor() {
    new Header();
    new MobileHeader();
    new Footer();
  }
}

export default Partials;
