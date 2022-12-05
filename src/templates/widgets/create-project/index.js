import 'Images/3d-baskı.png';
import 'Images/create-project-bg.png';
import 'Images/printing-page-cover.jpg';

import Swiper,{ EffectCoverflow, Pagination } from 'swiper';
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
                    const url_str = btns.getAttribute('data-url');
                    
                    //this.nextStepFirstBtn.removeAttribute('disabled');
                    //this.nextStepFirstBtn.classList.add('btn-green');
                    //this.nextStepFirstBtn.setAttribute('href', dataType);
                    //this.nextStepFirstBtn.location.href.replace("", dataType);
                    
                    this.nextStepFirstBtn.removeAttribute('disabled');
                    this.nextStepFirstBtn.classList.add('btn-green');
                    this.nextStepFirstBtn.setAttribute('href', url_str);

                });
            });
        }
    }

    nextToPageAction(){
        //first next step
        this.nextStepFirstBtn?.addEventListener('click', () => {

            switch (this.nextStepFirstBtn.getAttribute('data-url')) {
                case '/3d-baski.html':
                    break;
                case '/cnc-isleme.html':
                    break;
                case '/silikon-kaliplama.html':
                    break;
                case '/enjeksiyon-kaliplama.html':
                    break;
                case '/sac-metal-isleme.html':
                    break;
                case '/endustriyel.html':
                    break;
                case '/3d-tarama-tersine-muhendislik.html':
                    break;
                case '/ardil-islemler.html':
                    break;
            }
        });
    }
}

export default CreateProjectBanner;