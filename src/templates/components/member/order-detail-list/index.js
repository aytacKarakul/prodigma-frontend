export function OrderDetail(){

    const row = document.querySelectorAll('.order-detail-lists-rows-img');

    rowList();

    function rowList(rowImg,rowName){
        row.forEach((item) => {
            item.addEventListener('click', (e) => {
                const rowImg = e.target;
                const getName = e.target.parentElement.nextSibling.childNodes;
                const rowName = getName[0].children[0].firstChild.textContent
                addToUI(rowImg, rowName)
            });
        });
    }

    function addToUI(rowImg, rowName){
        const popupWrapper = document.createElement("div");

        popupWrapper.setAttribute("id", "modal-order-detail");
        popupWrapper.className = "modal modal-order-detail";

        popupWrapper.innerHTML = `
            <div class="modal-bg modal-exit"></div>
            <div class="modal-container">
                <div class="order-detail-pname">${rowName}</div>
                <a href="#" class="modal-link modal-exit"><i class="icon icon-close"></i></a>
                <img src=${rowImg.src} />
                <div class="order-report-btn"><a href="#">Sorun Bildir<a/></div>
            </div>
        `;

        document.body.appendChild(popupWrapper);
        popupWrapper.classList.add('open');

        const closePopup = document.querySelector('.modal-order-detail.open .modal-bg.modal-exit');
        const closePopupLink = document.querySelector('.modal-order-detail.open .modal-link.modal-exit');
        
        closePopup?.addEventListener('click', () => {
            popupWrapper.remove();
        });

        closePopupLink?.addEventListener('click', () => {
            popupWrapper.remove();
        });
    }
   
}