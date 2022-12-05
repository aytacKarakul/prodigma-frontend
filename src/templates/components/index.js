import Inputs from './web-component/inputs';
import Accordion from './accordion';
import { MemberDropdown } from './member/navigation';
import { MemberAddressPopup } from './member/address-list';

class Components {
    constructor(){
        new Inputs();
        new Accordion();
        MemberDropdown();
        MemberAddressPopup();
    }
}

export default Components;