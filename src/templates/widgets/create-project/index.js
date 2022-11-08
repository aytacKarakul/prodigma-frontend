import 'Images/3d-baskı.png';
class Injection{
    constructor(dataType, name, desc, note, pattern,materials){
        this.dataType = dataType;
        this.name = name;
        this.desc = desc;
        this.note = note;
        this.pattern = pattern;
        this.materials = materials;
    }
    createToInjection(){

        //Create Injection Wrapper
        let injectionWrapper = document.createElement('div');
        injectionWrapper.className = 'create-project-injection';
        
        injectionWrapper.innerHTML = `
        <div class='create-project-injection-left'>
            <div>${this.note}</div>
        </div>
        <div class='create-project-injection-right'>
            <div>${this.name}</div>
            <div>${this.desc}</div>
            <div class='create-project-injection-nextbtn'><button class='btn btn-secondary medium' type='button' data-type='injection' disabled><span>Sonraki Adım</span><i class='icon icon-arrow-line'></i></button></div>
        </div>
        `;

        const wrapper = document.querySelector('.create-project');
        wrapper.innerHTML = '';
        wrapper.appendChild(injectionWrapper);
        return wrapper;
    }
}

const injection = new Injection("injection","Enjeksiyon Kalıplama ile Tasarımlarınızı Hayata Geçirin!","Lorem ipsum sit amet.", "Bir CAD dosyası yükleyin veya sürükleyip bırakın",false, ['Çelik','Alüminyum']);
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
                    injection.createToInjection();
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