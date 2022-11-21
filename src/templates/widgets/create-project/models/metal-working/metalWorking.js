import Categories from "../models";
import customViewer from "../viewer";
import modalPopup from "../../../../components/web-component/modal";

class Metal extends Categories {

    constructor(type, name, desc, subText, materials){
        super(type,name,desc,subText);
        this.material = materials;
    }

    initComponent(){
        this.init() + this.material;
    }

    init(){

        //Create Injection Wrapper
        let template = document.createElement("div");
        template.className = `create-project-sets create-project-metal`;

        template.innerHTML = `
        <div class="create-project-left">
            <div class="drag-area"><i class='icon icon-upload'></i></div>
        </div>
        <div class="create-project-right">
            <div class="create-project-right-steps">
                <button class="lnk active" data-selection="properties">1</button>
                <span class="seperate"></span>
                <button class="lnk" data-selection="materials">2</button>
            </div>
            <div data-selection="properties">
                <div class="create-project-right-inner">
                    <div class="create-project-right-name">${this.desc}</div>
                    <div class="create-project-right-sub-text">${this.subText}</div>
                </div>
            </div>
            <div data-selection="materials" hidden>
                <div class="create-project-right-inner">
                    <div class="create-project-right-materials-title">Malzeme Seçimi</div>
                    <ul class="create-project-right-materials">
                    ${Object.keys(this.material).map(key => (
                    `<li id="${key}">
                        <div class='input radio'>
                            <input type='radio' />
                            <label for='js-material-keys'>${this.material[key]}</label>
                        </div>
                    </li>`
                    )).join('')}
                    </ul>
                </div>
            </div>
            <div class="create-project-right-nextbtn">
                <button class="btn btn-secondary btn-medium btn-next-to-bid" type="button" data-type="cnc" disabled><span>Sonraki Adım</span><i class="icon icon-arrow-line"></i></button>
                <button class='btn btn-secondary btn-medium btn-next-bid' type='button' disabled data-modal="modal-metal"><span>Fiyat Teklifi Al</span><i class='icon icon-arrow-line'></i></button>
            </div>
        </div>`;

        let createNewWrapper = document.querySelector('.create-project');
        createNewWrapper.innerHTML = '';
        createNewWrapper.appendChild(template);

        customViewer('metal');
        modalCncFunction();

    }
}   

const modalCncFunction = () => {
    console.log('Modal Success');

    let modalTemplate = document.createElement("div");
    modalTemplate.setAttribute("id", "modal-metal");
    modalTemplate.className = "modal";

    modalTemplate.innerHTML = `
    <div class="modal-bg modal-exit"></div>
    <div class="modal-container">
        <button class="modal-close modal-exit"><i class="icon icon-close"></i></button>    
        <h1>Metal Sac İşleme Fiyat Teklifi</h1>
        <h2>Fiyat teklifi talebiniz alınmıştır. Mümkün olan en kısa sürede projenizi inceleyip <strong>deniz.zileli@ozu.edu.tr</strong> e-posta adresine dönüş yapacağız.</h2>
        <button class="btn btn-medium btn-green modal-exit">Tamam</button>
    </div>
    `;
    
    document.body.appendChild(modalTemplate);
    modalPopup();
}

export default Metal;