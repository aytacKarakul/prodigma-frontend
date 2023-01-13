export const MemberAddressPopup = () => {
  const selectPopupWrapper = document.querySelector(
    ".member-address-add-popup"
  );
  const addressPopuopVail = document.querySelector(".vail-address-add");
  const selectBtn = document.querySelector(
    "#js-member-page-new-address-add-popup"
  );
  const closeBtn = document.querySelector(
    ".member-address-add-popup-title .icon"
  );

  if (selectBtn && closeBtn) {
    selectBtn.addEventListener("click", () => {
      document.body.style.overflow = "hidden";
      addressPopuopVail.classList.add("open");
      selectPopupWrapper.classList.add("open");
    });
    closeBtn.addEventListener("click", () => {
      document.body.style.removeProperty("overflow");
      selectPopupWrapper.classList.remove("open");
      addressPopuopVail.classList.remove("open");
    });
    addressPopuopVail.addEventListener("click", () => {
      document.body.style.removeProperty("overflow");
      selectPopupWrapper.classList.remove("open");
      addressPopuopVail.classList.remove("open");
    });
  }
};
