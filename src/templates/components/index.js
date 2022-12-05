import Inputs from './web-component/inputs';
import Accordion from './accordion';
import { MemberDropdown } from './member/navigation';
import { OrderDetail } from './member/order-detail-list';
import { MemberAddressPopup } from './member/address-list';

class Components {
    constructor(){
        new Inputs();
        new Accordion();
        MemberDropdown();
        OrderDetail();
        MemberAddressPopup();
    }
}

export default Components;