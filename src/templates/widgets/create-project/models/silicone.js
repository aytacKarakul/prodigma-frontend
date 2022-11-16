import Categories from "./models";

import PieceEnterModel from "./pieceEnter";
import TecnicGraphModel from "./tecnicGraphUpload";
import ScaleModel from './scaleModule';

import modalPopup from "../../../components/web-component/modal";

class CategorySilicone extends Categories{
    constructor(dataType, dataName, dataDesc, DataSubText, materials){
        super(dataType,dataName,dataDesc,DataSubText);
        this.material = materials;
    }

    initSiliconePatern(){
        return this.init() + this.material;
    }

    createTemplate(type){
        let siliconeTemplate = document.createElement('div');
        siliconeTemplate.className = `create-project-sets create-project-${type}`;

        siliconeTemplate.innerHTML = `
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
        <button class='btn btn-secondary btn-medium btn-next-bid' type='button' disabled data-modal="modal-one"><span>Fiyat Teklifi Al</span><i class='icon icon-arrow-line'></i></button>
        </div>
        </div>
        <div class="modal" id="modal-one">
            <div class="modal-bg modal-exit"></div>
            <div class="modal-container">
                <button class="modal-close modal-exit"><i class="icon icon-close"></i></button>    
                <h1>Silikon Kalıplama Fiyat Teklifi</h1>
                <h2>Fiyat teklifi talebiniz alınmıştır. Mümkün olan en kısa sürede projenizi inceleyip <strong>deniz.zileli@ozu.edu.tr</strong> e-posta adresine dönüş yapacağız.</h2>
                <button class="btn btn-medium btn-green modal-exit">Tamam</button>
            </div>
        </div>`;
        
        //--
        let createSiliconeProjectWrapper = document.querySelector('.create-project');
        createSiliconeProjectWrapper.innerHTML = '';
        createSiliconeProjectWrapper.appendChild(siliconeTemplate);

        return siliconeTemplate;
    }

    //viewer
    customViewer = () => {
        // Drag and Drop property
        const dragArea = document.querySelector(".drag-area");
        const stepBtns = document.querySelectorAll(".create-project-right-steps > .lnk");
        const nextSelectionBtnFirst = document.querySelector(".create-project-right-nextbtn .btn-next-to-bid");
        const nextSelectionBtnLast = document.querySelector(".create-project-right-nextbtn .btn-next-bid");
        const wrapperProperties = document.querySelector(".create-project-right > [data-selection='properties']");
        const wrapperMaterials = document.querySelector(".create-project-right > [data-selection='materials']");
        const materialsContainerElement = document.querySelectorAll('.create-project-right-materials li input');

        let file;
    
        if(dragArea){

            dragArea.addEventListener('dragover', (event) => {
                event.preventDefault();
                dragArea.classList.add('active');
                nextSelectionBtnFirst.removeAttribute('disabled');
                nextSelectionBtnFirst.classList.add('btn-green');
                console.log('File is inside the drag area');
            });
            dragArea.addEventListener('dragleave', () => {
                console.log('File left the drag area');
                dragArea.classList.remove('active');
                nextSelectionBtnFirst.setAttribute('disabled');
                nextSelectionBtnFirst.classList.remove('btn-green');
            });

            dragArea.addEventListener('drop', (event) => {
                event.preventDefault();

                file = event.dataTransfer.files[0];
                let fileType = file.type;
                //console.log(fileType);
    
                let validExtensions = ['image/jpeg','image/jpg','image/png'];
    
                if(validExtensions.includes(fileType)){
                    let fileReader = new FileReader();
    
                    fileReader.onload = () => {
                        let fileUrl = fileReader.result;
    
                        let imgTag = `<img src="${fileUrl}" alt="" />`;
                        dragArea.innerHTML = imgTag;
                    }
                    fileReader.readAsDataURL(file);

                    PieceEnterModel();
                    TecnicGraphModel();
                    ScaleModel();

                }else{
                    alert('This file is not an Image');
                    dragArea.classList.remove('active');
                }
                console.log(file);
            });
            
            //-
            nextSelectionBtnFirst.addEventListener('click', function(){
                stepBtns.forEach((btn) => {
                    if(btn.classList.contains('active')){
                        btn.classList.remove('active');
                        btn.innerHTML = '';
                        btn.classList.add('passed');
                    }
                    else{
                        const selectedBtn = document.querySelectorAll('.create-project-right-steps > .lnk.active');
                        selectedBtn.forEach((selected) => {
                            selected.classList.remove('active');;
                        });
                        btn.classList.add('active');
                    }
                });
                this.remove();
                wrapperProperties.classList.add('hidden');
                wrapperMaterials.removeAttribute('hidden');
                nextSelectionBtnLast.style.display = 'flex';
            });

            //-
            materialsContainerElement.forEach((el) => {
                el.addEventListener('click', function(){
                    if(el.parentElement.parentElement.classList.contains('active')){
                        el.checked = false;
                        el.parentElement.parentElement.classList.remove('active');
                    }else{
                        const selectedInputItems = document.querySelectorAll('.create-project-right-materials li.active');
                        const selectedInputItemsInput = document.querySelectorAll('.create-project-right-materials li.active input');
                        selectedInputItems.forEach((items) => {
                            items.classList.remove('active');
                        });
                        selectedInputItemsInput.forEach((event) => {
                            event.checked = false;
                        });
                        el.checked = true;
                        el.parentElement.parentElement.classList.add('active');
                    }
                    nextSelectionBtnLast.removeAttribute('disabled');
                    nextSelectionBtnLast.classList.add('btn-green');
                });
            });
        }
    }
    // modal
    modalOpened = () => {
        modalPopup();
    };

}

export default CategorySilicone;