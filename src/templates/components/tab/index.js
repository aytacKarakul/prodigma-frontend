import './index.scss';

var tabs = require('tabs');
var container = document.querySelector('.tab-container');

const membershipIndividualSelect = document.querySelector('#js-individual-membership');
const membershipCorporateSelect = document.querySelector('#js-corporate-membership');
const deneme = document.querySelector('.input-membership-select');
const wrap = document.querySelectorAll('.input-step-selection');

class LoginTabs {

    constructor(){
        this.init();
    }

    init(){
        if(container){
            tabs(container);
            deneme?.firstChild.classList.add('active');
            membershipIndividualSelect?.addEventListener('click', this.changeLoginTabContent);
            membershipCorporateSelect?.addEventListener('click', this.changeLoginTabContent);
        }
    }

    changeLoginTabContent = (e) => {
        if(e.target.getAttribute('data-tab') == 'click-individual'){
            e.target.checked = true;
            membershipCorporateSelect.checked = false;

            wrap.forEach((item) => {
                if(item.getAttribute('data-tab') == 'click-individual'){
                    item.nextElementSibling.classList.remove('active');
                    item.nextElementSibling.classList.add('hidden');
                    item.classList.remove('hidden')
                    item.classList.add('active');
                }
            });

        }else if(e.target.getAttribute('data-tab') == 'click-corporate'){
            e.target.checked = true;
            membershipIndividualSelect.checked = false;

            wrap.forEach((item) => {
                if(item.getAttribute('data-tab') == 'click-corporate'){
                    item.previousSibling.classList.remove('active');
                    item.previousSibling.classList.add('hidden');
                    item.classList.remove('hidden')
                    item.classList.add('active');
                }
            });

        }
    }

}

export default LoginTabs;