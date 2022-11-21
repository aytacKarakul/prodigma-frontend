import Categories from "./models";
import customViewer from "./viewer";
import modalPopup from "../../../components/web-component/modal";
class CategoriesInjection extends Categories {
    constructor(dataType, dataName, dataDesc, DataSubText, materials){
        super(dataType,dataName,dataDesc,DataSubText);
        this.material = materials;
    }
    
    initComponent(){
        this.init() + this.material;
    }

    init(type){

        let template = document.createElement('div');
        template.className = `create-project-sets create-project-${type}`;

        template.innerHTML = `
        <div class='create-project-left'>
            <div class='drag-area'><i class='icon icon-upload'></i></div>
            <div class='create-project-left-desc'>${this.desc}</div>
            <div class='create-project-left-tt1'>*Maxmum dosya yükleme boyutu 150 mb’dir.</div>
            <div class='create-project-left-tt2'>*Şu uzantıdaki dosyaları yükleyin; 3DM, IGES, IGS, STEP, STL</div>
        </div>
        <div class='create-project-right'>
        <div class='create-project-right-steps'><button class='lnk active' data-selection='properties'>1</button><span class='seperate'></span><button class='lnk' data-selection='materials'>2</button></div>
        <div data-selection='properties'>
        <div class='create-project-right-inner'>
        <div class='create-project-right-name'>${this.name} ile Tasarımlarınızı Hayata Geçirin!</div>
        <div class='create-project-right-sub-text'>${this.subText}</div>
        </div>
        </div>
        <div data-selection='materials' hidden>
        <div class='create-project-right-inner'>
        <ul class='create-project-right-materials'>
        <div class='create-project-right-materials-title'>Malzeme Seçimi</div>
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
        <div class='create-project-right-nextbtn'>
        <button class='btn btn-secondary btn-medium btn-next-to-bid' type='button' data-type=${this.type} disabled><span>Sonraki Adım</span><i class='icon icon-arrow-line'></i></button>
        <button class='btn btn-secondary btn-medium btn-next-bid' type='button' disabled data-modal="modal-injection"><span>Fiyat Teklifi Al</span><i class='icon icon-arrow-line'></i></button>
        </div>
        </div>`;

        let createNewWrapper = document.querySelector('.create-project');
        createNewWrapper.innerHTML = '';
        createNewWrapper.appendChild(template);
        
        customViewer('injection');
        modalFunction();

    }
}

const modalFunction = () => {
    console.log('Modal Success');

    let modalTemplate = document.createElement("div");
    modalTemplate.setAttribute("id", "modal-injection");
    modalTemplate.className = "modal";

    modalTemplate.innerHTML = `
    <div class="modal-bg modal-exit"></div>
    <div class="modal-container">
        <button class="modal-close modal-exit"><i class="icon icon-close"></i></button>    
        <h1>Enjeksiyon Kalıplama Fiyat Teklifi</h1>
        <h2>Fiyat teklifi talebiniz alınmıştır. Mümkün olan en kısa sürede projenizi inceleyip <strong>deniz.zileli@ozu.edu.tr</strong> e-posta adresine dönüş yapacağız.</h2>
        <button class="btn btn-medium btn-green modal-exit">Tamam</button>
    </div>
    `;
    
    document.body.appendChild(modalTemplate);
    modalPopup();
}

export default CategoriesInjection;