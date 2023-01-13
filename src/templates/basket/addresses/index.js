const membershipAdressIndividualSelect = document.querySelector(
  "#js-address-individual-membership"
);
const membershipAdressCorporateSelect = document.querySelector(
  "#js-address-corporate-membership"
);
const basketStepWrap = document.querySelectorAll(
  ".basket-address-tab-success-step-selection"
);
const basketAdressRadioSelection = document.querySelector(
  ".basket-address-tab-success-invoice-content"
);

class BasketAddressInvoiceTab {
  constructor() {
    this.init();
  }

  init() {
    basketAdressRadioSelection?.firstChild.classList.add("active");
    membershipAdressIndividualSelect?.addEventListener(
      "click",
      this.changeAddressTabContent
    );
    membershipAdressCorporateSelect?.addEventListener(
      "click",
      this.changeAddressTabContent
    );
  }

  changeAddressTabContent = (e) => {
    if (e.target.getAttribute("data-tab") == "click-address-individual") {
      e.target.checked = true;
      membershipAdressCorporateSelect.checked = false;

      e.target.parentElement.classList.add("active");
      e.target.parentElement.nextSibling.classList.remove("active");

      basketStepWrap.forEach((item) => {
        if (item.getAttribute("data-tab") == "click-address-individual") {
          item.nextElementSibling.classList.remove("active");
          item.nextElementSibling.classList.add("hidden");
          item.classList.add("active");
        }
      });
    } else if (e.target.getAttribute("data-tab") == "click-address-corporate") {
      membershipAdressIndividualSelect.checked = false;
      e.target.checked = true;

      e.target.parentElement.classList.add("active");
      e.target.parentElement.previousSibling.classList.remove("active");

      basketStepWrap.forEach((item) => {
        if (item.getAttribute("data-tab") == "click-address-corporate") {
          item.previousSibling.classList.remove("active");
          item.previousSibling.classList.add("hidden");
          item.classList.add("active");
        }
      });
    }
  };
}

export default BasketAddressInvoiceTab;
