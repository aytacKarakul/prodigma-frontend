export default function Viewer3D (){
    // Drag and Drop property
    const dragArea = document.querySelector('.drag-area');
    const nextSelectionBtnFirst = document.querySelector('.create-project-injection-right-nextbtn .btn');
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
            }else{
                alert('This file is not an Image');
                dragArea.classList.remove('active');
            }
            console.log(file);
        });
    }
}