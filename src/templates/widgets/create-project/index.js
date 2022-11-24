import 'Images/3d-baskı.png';
import 'Images/create-project-bg.png'

import Swiper,{ EffectCoverflow, Pagination } from 'swiper';
import CategorySilicone from './models/silicone';
import CategoriesInjection from './models/injection';
import CategoriesCncMachining from './models/cncMachining';
import ReverseMaching from "./models/reverse-engineering/reverseMaching";
import Industrial from './models/industrial/industrial';
import Metal from './models/metal-working/metalWorking';

const siliconeInjection = new CategorySilicone('silicone',' Silikon Kalıplama',' Bir CAD dosyası yükleyin veya sürükleyip bırakın','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', ['ABS Like', 'Elastomer Like', 'Akrilik Like']);

const cateInjection = new CategoriesInjection('injection',' Enjeksiyon Kalıplama','Bir CAD dosyası yükleyin veya sürükleyip bırakın','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', ['Çelik', 'Alüminyum']);

const cncMachining = new CategoriesCncMachining("cnc", "CNC İşleme", "Siz tasarlayın, Prodigma CNC işlesin!" ,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", ['ABS Like', 'Elastomer Like', 'Akrilik Like', 'ABS Like', 'Elastomer Like', 'Akrilik Like']);

const reverseMaching = new ReverseMaching();

const industrial = new Industrial();

const metal = new Metal('metal',' Sac Metal İşleme',' Sac Metal İşleme ile Tasarımlarınızı Hayata Geçirin!','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', ['Alüminyum', 'Paslanmaz Çelik', 'Dkp Sac', 'Siyah Sac', 'Galvanizli Sac', 'Hrp Sac']);

class CreateProjectBanner {
    
    constructor(){
        this.createProjectBtn = document.querySelector('.site-header-login-success-project');
        this.createProjectBodyBtn = document.querySelectorAll('.create-project-swiper .swiper-slide button');
        this.nextStepFirstBtn = document.querySelector('#js-next-to-step-first');

        //first Inıtials
        this.initCreateProject();

        var swiperCoverFlow = new Swiper(".create-project-swiper", {
            modules: [EffectCoverflow, Pagination],
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            loop: true,
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 160,
              modifier: 1,
              slideShadows: false,
            },
            pagination: {
              el: ".swiper-pagination",
            },
        });
        return swiperCoverFlow;
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
                    //printing.init();
                    break;
                case 'cnc':
                    cncMachining.init();
                    break;
                case 'silicone':
                    siliconeInjection.init('silicone');
                    break;
                case 'injection':
                    cateInjection.init('injection');
                    break;
                case 'metal':
                    metal.init();
                    break;
                case 'industrial':
                    industrial.init();
                    break;
                case 'reverse':
                    reverseMaching.init();
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