import modalPopup from "../../../../components/web-component/modal";
import 'Images/printing-page-cover.jpg';

class ReverseMaching {
    constructor(cover, title, desc, requirement, inputDesc, date, hour){
        this.cover = cover;
        this.title = title;
        this.desc = desc;
        this.requirement = requirement;
        this.inputDesc = inputDesc;
        this.date = date;
        this.hour = hour;
    }

    initComponent(){
        this.init(); 
    }

    init(){
        let template = document.createElement('div');
        template.className = `create-project-sets create-project-printing`;

        template.innerHTML = `
            <div class="create-project-left">
                <picture>
                    <source media="(min-width:650px)" srcset="${require('Images/printing-page-cover.jpg')}">
                    <source media="(min-width:465px)" srcset="${require('Images/printing-page-cover.jpg')}">
                    <img src="${require('Images/printing-page-cover.jpg')}" alt="Flowers" />
                </picture>
            </div>
            <div class="create-project-right">
                <div class="create-project-right-inner">
                    <div class="create-project-right-name">Prodigma uzmanlarından 3D Tarama ve Tersine Mühendislik desteği alın!</div>
                    <div class="create-project-right-sub-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</div>
                    <div class="create-project-right-priting-case">
                        <div class="create-project-right-priting-case-title">Bu işleme neden ihtiyaç duyuyorsunuz?</div>
                        <ul>
                            <li><div class="input radio" id="js-section-1"><input type="radio" /><label for="js-section-1">Yeniden üretmek istenilen ürünün 3D datası yok</label></div></li>
                            <li><div class="input radio" id="js-section-2"><input type="radio" /><label for="js-section-2">İhtiyaç duyulan ürünün artık üretilmiyor</label></div></li>
                            <li><div class="input radio" id="js-section-3"><input type="radio" /><label for="js-section-3">Ürün tasarımında revizyon ihtiyacı var</label></div></li>
                            <li><div class="input radio" id="js-section-4"><input type="radio" /><label for="js-section-4">Orijinal 3D data güncel imalat yöntemleri için yeterli değil</label></div></li>
                        </ul>
                    </div>
                    <div class="create-project-right-priting-desc">
                        <div class="input textarea">
                            <textarea placeholder="Açıklama belirtin"></textarea>
                        </div>
                    </div>
                    <div class="create-project-right-priting-date">
                        <div class="create-project-right-priting-date-title">
                            Projenizi yüz yüze görüşelim... Uygun tarih ve saatlerden seçim yapın.
                        </div>
                        <div class="create-project-right-priting-date-select">
                            <div class="input textbox">
                                <input type="date" />
                            </div>
                            <div class="input textbox">
                                <input type="date" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="create-project-right-priting-footer">
                    <div class="create-project-right-priting-footer-left">
                        <i class="icon icon-info"></i>
                        <span>Görüşmelerimiz 15 dk ile sınırlıdır.</span>
                    </div>
                    <div class="create-project-right-priting-footer-btn">
                        <button type="button" class="btn btn-secondary btn-medium">Uzman ile görüş</button>
                    </div>
                </div>
            </div>`;

        let createNewWrapper = document.querySelector('.create-project');
        createNewWrapper.innerHTML = '';
        createNewWrapper.appendChild(template);

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
        <h1>3D Tarama ve Tersine Mühendislik Fiyat Teklifi</h1>
        <h2>Uzmanımızla görüşme teklifiniz alınmıştır. Mümkün olan en kısa sürede projenizi inceleyip <strong>deniz.zileli@ozu.edu.tr</strong> e-posta adresine dönüş yapacağız.</h2>
        <button class="btn btn-medium btn-green modal-exit">Tamam</button>
    </div>`;
    
    document.body.appendChild(modalTemplate);
    modalPopup();
}

export default ReverseMaching;