import Inputs from "./web-component/inputs";
import Accordion from "./accordion";
import { MemberDropdown } from "./member/navigation";
import { OrderDetail } from "./member/order-detail-list";
import { MemberAddressPopup } from "./member/address-list";
import ModuleForgotPassword from "./forms/password-forgot";
import AuthUserLogin from "./forms/register-forms/login";
class Components {
  constructor() {
    new AuthUserLogin();
    new Inputs();
    new Accordion();
    MemberDropdown();
    OrderDetail();
    MemberAddressPopup();
    new ModuleForgotPassword();
  }
}

export default Components;
