import Inputs from "./web-component/inputs";
import Accordion from "./accordion";
import AuthUserLogin from "./forms/register-forms/login";
import LoginTabs from "./register";
import { MemberDropdown } from "./member/navigation";
import { OrderDetail } from "./member/order-detail-list";
import { MemberAddressPopup } from "./member/address-list";
import ModuleForgotPassword from "./forms/password-forgot";

class Components {
  constructor() {
    new Inputs();
    new AuthUserLogin();
    new LoginTabs();
    new ModuleForgotPassword();
    new Accordion();
    MemberDropdown();
    OrderDetail();
    MemberAddressPopup();
  }
}

export default Components;
