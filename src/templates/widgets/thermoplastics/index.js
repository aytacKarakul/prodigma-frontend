export function Thermoplastics() {
    const material = document.querySelectorAll(".pmaterials-thermoplastics-content-material-img");

    materialList();

    function materialList(materialImg, materialName) {
        material.forEach((item) => {
            item.addEventListener("click", (e) => {
                const materialImg = e.target;
                addToUI(materialImg);
            });
        });
    }


    function addToUI(materialImg) {
        const popupWrapper = document.createElement("div");

        popupWrapper.setAttribute("id", "modal-thermoplastics-info");
        popupWrapper.className = "modal modal-thermoplastics-info";

        popupWrapper.innerHTML = `
        <div class="modal-bg modal-exit"></div>
        <div class="modal-container">
            <a href="#" class="modal-link modal-exit"><i class="icon icon-close"></i></a>
        </div>
    `;

        document.body.appendChild(popupWrapper);
        popupWrapper.classList.add("open");


        const closePopup = document.querySelector(
            ".modal-thermoplastics-info.open .modal-bg.modal-exit"
          );
        const closePopupLink = document.querySelector(
            ".modal-thermoplastics-info.open .modal-link.modal-exit"
        );

        closePopup?.addEventListener("click", () => {
            popupWrapper.remove();
        });
    
        closePopupLink?.addEventListener("click", () => {
            popupWrapper.remove();
        });  
    }
}