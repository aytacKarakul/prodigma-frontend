import Inputs from './web-component/inputs';
import Accordion from './accordion';
import { MemberDropdown } from './member/navigation';
import { OrderDetail } from './member/order-detail-list';

class Components {
    constructor(){
        new Inputs();
        new Accordion();
        MemberDropdown();
        OrderDetail();
    }
}

export default Components;