import 'Images/3d-baskı.png';
import CategoriesInjection from './models/injection';

const cateInjection = new CategoriesInjection('injection',' Enjeksiyon Kalıplama',' Bir CAD dosyası yükleyin veya sürükleyip bırakın','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 5);

class CreateProjectBanner {
    
    constructor(){
        this.createProjectBtn = document.querySelector('.site-header-login-success-project');
        this.createProjectBodyBtn = document.querySelectorAll('.create-project-body > ul > li > button');
        this.nextStepFirstBtn = document.querySelector('#js-next-to-step-first');

        //first Inıtials
        this.initCreateProject();
    }

    //initial all functions
    initCreateProject(){
        this.createProjectBtnRemoveHtml();
        this.createProjectBtnSelection();
        this.nextToPageAction();
    }
    
    createProjectBtnRemoveHtml(){
        if(this.createProjectBtn){
            if(document.body.classList.contains('page-create-project')){
                this.createProjectBtn.remove();
            }
        }
    }

    createProjectBtnSelection(){
        if(this.createProjectBodyBtn){
            this.createProjectBodyBtn.forEach((btns) => {
                btns.addEventListener('click', () => {
                    const dataType = btns.getAttribute('data-type');
                    
                    this.nextStepFirstBtn.removeAttribute('disabled');
                    this.nextStepFirstBtn.classList.add('btn-green');
                    this.nextStepFirstBtn.setAttribute('data-type', dataType);

                });
            });
        }
    }

    nextToPageAction(){
        //first next step
        this.nextStepFirstBtn?.addEventListener('click', () => {

            switch (this.nextStepFirstBtn.getAttribute('data-type')) {
                case null:
                    break;
                case 'printing':
                    break;
                case 'cnc':
                    break;
                case 'silicone':
                    break;
                case 'injection':
                    cateInjection.createTemplate();
                    break;
                case 'metal':
                    break;
                case 'industrial':
                    break;
                case 'reverse':
                    break;
                case 'post':
                    break;
                default:
                    break;
            }
        });
    }
}

export default CreateProjectBanner;