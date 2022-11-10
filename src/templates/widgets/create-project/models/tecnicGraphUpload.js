export default function TecnicGraphModel(){
    let createProjectRight = document.querySelector('.create-project-injection-right-inner');

    const trans = {
        textTecnicText: 'Teknik Çizim Görseli yükleyin (PDF&DWG)',
        textTecnicText2: 'ya da görseli sürükleyip bırakın',
    };
    
    let tecnicGraphWrap = document.createElement('div');
    tecnicGraphWrap.className = 'create-project-injection-right-technical';

    tecnicGraphWrap.innerHTML = `<div class="create-project-injection-right-technical-t1">${trans.textTecnicText}</div>
    <div class="create-project-injection-right-technical-t2">${trans.textTecnicText2}</div>
    <a href="#" class="tecnical-file-upload"><i class="icon icon-arrow-line"></i></a>`;

    createProjectRight.appendChild(tecnicGraphWrap);
    return tecnicGraphWrap;
}