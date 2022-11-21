import ContractManufactureModel from "./contractManufacturing";
import PieceEnterModel from "./pieceEnter";
import TecnicGraphModel from "./tecnicGraphUpload";
import ScaleModel from './scaleModule';
import CncTypeSelectionModel from "./CncTypeSelectionModel";

const customViewer = (typeSelection) => {

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

        dragArea?.addEventListener('dragover', (event) => {
            event.preventDefault();
            dragArea.classList.add('active');
            nextSelectionBtnFirst?.removeAttribute('disabled');
            nextSelectionBtnFirst?.classList.add('btn-green');
            console.log('File is inside the drag area');
        });
        dragArea?.addEventListener('dragleave', () => {
            console.log('File left the drag area');
            dragArea.classList.remove('active');
            nextSelectionBtnFirst?.setAttribute('disabled');
            nextSelectionBtnFirst?.classList.remove('btn-green');
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

                switch (typeSelection) {
                    case 'cnc':
                        ScaleModel();
                        TecnicGraphModel();
                        CncTypeSelectionModel();
                        PieceEnterModel();
                        break;
                    case 'silicone':
                        ScaleModel();
                        TecnicGraphModel();
                        PieceEnterModel();
                        break;
                    case 'injection':
                        ScaleModel();
                        ContractManufactureModel();
                        TecnicGraphModel();
                        PieceEnterModel();
                        break;
                    case 'metal':
                        ScaleModel();
                        TecnicGraphModel();
                        PieceEnterModel();
                    default:
                        break;
                }

            }else{
                alert('This file is not an Image');
                dragArea.classList.remove('active');
            }
            console.log(file);
        });
        
        //-
        nextSelectionBtnFirst?.addEventListener('click', function(){
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
            if(nextSelectionBtnLast){
                nextSelectionBtnLast.style.display = 'flex';
            }
        });

        materialsContainerElement?.forEach((el) => {
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
                nextSelectionBtnLast?.removeAttribute('disabled');
                nextSelectionBtnLast?.classList.add('btn-green');
            });
        });
    }
}
export default customViewer;