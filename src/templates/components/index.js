import Inputs from './web-component/inputs';
import Accordion from './accordion';
import { MemberDropdown } from './member/navigation';

class Components {
    constructor(){
        new Inputs();
        new Accordion();
        MemberDropdown();
    }
}

export default Components;