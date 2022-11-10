import Categories from "./models";
import Viewer3D from "./viewer";

import ContractManufactureModel from "./contractManufacturing";
import PieceEnterModel from "./pieceEnter";
import TecnicGraphModel from "./tecnicGraphUpload";
import ScaleModel from './scaleModule';

class CategoriesInjection extends Categories {
    constructor(dataType, dataName, dataDesc, DataSubText, dataPiece){
        super(dataType,dataName,dataDesc,DataSubText);
        this.piece = dataPiece;
    }
    
    initInjection(){
        return this.init() + this.piece;
    }

    createTemplate(){

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
            <div class='create-project-injection-right-nextbtn'><button class='btn btn-secondary btn-medium' type='button' data-type='injection' disabled><span>Sonraki Adım</span><i class='icon icon-arrow-line'></i></button></div>
        </div>
        </div>`;

        let createProjectWrapper = document.querySelector('.create-project');
        createProjectWrapper.innerHTML = '';
        createProjectWrapper.appendChild(injectionTemplate);

        Viewer3D();
        
        setTimeout(() => {
            ContractManufactureModel();
            PieceEnterModel();
            TecnicGraphModel();
            ScaleModel();    
        }, 1500);

        return injectionTemplate;
    }
}

export default CategoriesInjection;