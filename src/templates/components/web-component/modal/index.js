function modalPopup() {
  const modalOpenTrigger = document.querySelectorAll("a[data-modal]");
  const modals = document.querySelectorAll(".modal");
  const modalExit = document.querySelectorAll(".modal .modal-exit");

  modalOpenTrigger.forEach(function (trigger) {
    trigger.addEventListener("click", function (event) {
      event.preventDefault();

      const selectButton = this.getAttribute("data-modal");
      const modalAttr = this.nextSibling;

      if (modalAttr) {
        const modalId = modalAttr.getAttribute("id");
        if (selectButton === modalId) {
          console.log(selectButton, modalId);
          console.log(true);
          modalAttr.classList.add("open");
        }
      } else {
        console.log("Video Bulunamadı");
      }
    });
  });
  modalExit.forEach(function (e) {
    e.addEventListener("click", function () {
      modals.forEach((modal) => {
        if (modal.classList.contains("open")) {
          modal.classList.remove("open");
          //window.location.href = "/";
        }
      });
    });
  });
}

export default modalPopup;
