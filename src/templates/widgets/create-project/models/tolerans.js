class Tolerans {
  constructor(id, kategori_id, isim, fiyat, sira, durum) {
    this.id = id;
    this.kategori_id = kategori_id;
    this.isim = isim;
    this.fiyat = fiyat;
    this.sira = sira;
    this.durum = durum;

    this.element = document.querySelector(".create-project-toleranses");

    this.init();
    this.onChange();
  }
  init() {
    let temp = document.createElement("option");
    temp.setAttribute("id", this.id);
    temp.setAttribute("kategori_id", this.kategori_id);
    temp.textContent = this.isim;
    temp.setAttribute("price", this.fiyat);

    document.querySelector("#js-tolerans-list-name").append(temp);
    this.element.classList.remove("hidden");
  }
  onChange() {
    const selectBtn = document.querySelector("#js-tolerans-list-name");
    const btnPriceOffer = document.querySelector(
      ".create-project-right-nextbtn .btn-next-bid"
    );

    selectBtn.addEventListener("change", function () {
      const selectValueId = selectBtn.options[selectBtn.selectedIndex].id;

      btnPriceOffer.setAttribute("tolerans", selectValueId);
    });
  }
}

export default Tolerans;
