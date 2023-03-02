function modalPopup() {
  const modalOpenTrigger = document.querySelectorAll("[data-modal]");
  const modals = document.querySelectorAll(".modal");
  const modalExit = document.querySelectorAll(".modal .modal-exit");

  modalOpenTrigger.forEach(function (trigger) {
    trigger.addEventListener("click", function (event) {
      event.preventDefault();

      modals.forEach((modal) => {
        modal.classList.add("open");
      });
    });
  });
  modalExit.forEach(function (e) {
    e.addEventListener("click", function () {
      modals.forEach((modal) => {
        if (modal.classList.contains("open")) {
          modal.classList.remove("open");
          window.location.reload();
        }
      });
    });
  });
}

export default modalPopup;
