export default function CncTypeSelectionModel(){
    let createProjectRight = document.querySelector('.create-project-right-inner');
    
    const trans = {
        textFasonUretim: 'Fason Üretim istiyorum',
        textFasonUretimAciklama: 'Kalıp üretimine ek olarak kalıptan ürün üretimi hizmeti de alabilirsiniz.',
    };

    let templateCncProcess = document.createElement('div');
    templateCncProcess.className = 'create-project-right-cnc-process';

    templateCncProcess.innerHTML = `
    <div class="create-project-right-cnc-process-inner">
        <div class="create-project-right-cnc-process-title">CNC İşleme yöntemi seçiniz</div>
        <ul>
            <li><div class="input radio" id="js-section-1"><input type="radio" /><label for="js-section-1">CNC Makina</label></div></li>
            <li><div class="input radio" id="js-section-2"><input type="radio" /><label for="js-section-2">CNC Torna</label></div></li>
            <li><div class="input radio" id="js-section-3"><input type="radio" /><label for="js-section-3">CNC Freze</label></div></li>
            <li><div class="input radio" id="js-section-4"><input type="radio" /><label for="js-section-4">Tel Erezyon</label></div></li>
            <li><div class="input radio" id="js-section-5"><input type="radio" /><label for="js-section-5">Dalma Erezyon</label></div></li>
        </ul>
    </div>`;

    createProjectRight.appendChild(templateCncProcess);
    return templateCncProcess;
}