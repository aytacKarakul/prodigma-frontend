import Categories from "./models";
import Viewer3D from "./viewer";

class CategoriesInjection extends Categories {
    constructor(dataType, dataName, dataDesc, DataSubText, dataPiece){
        super(dataType,dataName,dataDesc,DataSubText);
        this.piece = dataPiece;
    }
    
    initInjection(){
        return this.init() + this.piece;
    }

    createTemplate(){

        const trans = {
            textFasonUretim: 'Fason Üretim istiyorum',
            textFasonUretimAciklama: 'Kalıp üretimine ek olarak kalıptan ürün üretimi hizmeti de alabilirsiniz.',
            textTecnicText: 'Teknik Çizim Görseli yükleyin (PDF&DWG)',
            textTecnicText2: 'ya da görseli sürükleyip bırakın',
        };

        //Create Injection Wrapper
        let injectionTemplate = document.createElement('div');
        injectionTemplate.className = 'create-project-injection';

        injectionTemplate.innerHTML = `
        <div class='create-project-injection-left'>
            <div class='drag-area'><i class='icon icon-upload'></i></div>
            <div class='create-project-injection-left-desc'>${this.desc}</div>
            <div class='create-project-injection-left-tt1'>*Maxmum dosya yükleme boyutu 150 mb’dir.</div>
            <div class='create-project-injection-left-tt2'>*Şu uzantıdaki dosyaları yükleyin; 3DM, IGES, IGS, STEP, STL</div>
        </div>
        <div class='create-project-injection-right'>
        <div class='create-project-injection-right-inner'>
            <div class='create-project-injection-right-steps'><button class='lnk active'>1</button><span class='seperate'></span><button class='lnk'>2</button></div>
            <div class='create-project-injection-right-name'>${this.name} ile Tasarımlarınızı Hayata Geçirin!</div>
            <div class='create-project-injection-right-sub-text'>${this.subText}</div>
            <div class='create-project-injection-right-patern'>
            <div class='create-project-injection-right-patern-t1'>${trans.textFasonUretim}</div>
            <div class='create-project-injection-right-patern-t2'>${trans.textFasonUretimAciklama}</div>
            </div>
            <div class='create-project-injection-right-technical'>
            <div class='create-project-injection-right-technical-t1'>${trans.textTecnicText}</div>
            <div class='create-project-injection-right-technical-t2'>${trans.textTecnicText2}</div>
            <i class='icon icon-arrow-line'></i>
            </div>
            <div class='create-project-injection-right-nextbtn'><button class='btn btn-secondary btn-medium' type='button' data-type='injection' disabled><span>Sonraki Adım</span><i class='icon icon-arrow-line'></i></button></div>
        </div>
        </div>`;

        let createProjectWrapper = document.querySelector('.create-project');
        createProjectWrapper.innerHTML = '';
        createProjectWrapper.appendChild(injectionTemplate);

        Viewer3D();
        return injectionTemplate;
    }
}

export default CategoriesInjection;