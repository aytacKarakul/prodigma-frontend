class Materials {
  constructor(id, kategori_id, isim, fiyat, resim, durum, sira) {
    this.id = id;
    this.kategori_id = kategori_id;
    this.isim = isim;
    this.fiyat = fiyat;
    this.resim = resim;
    this.durum = durum;
    this.sira = sira;

    this.documentElement = document.querySelector(
      "ul.create-project-right-materials"
    );

    this.init();
    this.onChange();
  }
  init() {
    //template li create
    let tempLi = document.createElement("li");

    //template li > div create
    let tempDiv = document.createElement("div");
    tempDiv.className = "input radio";

    //template li > div > input create
    let tempInput = document.createElement("input");
    tempInput.setAttribute("type", "radio");
    tempInput.setAttribute("id", this.id);
    tempInput.setAttribute("price", this.fiyat);
    tempInput.setAttribute("name", this.kategori_id);

    //template li > div > label create
    let tempLabel = document.createElement("label");
    tempLabel.setAttribute("for", "js-material-keys");
    tempLabel.textContent = this.isim;

    //append elements
    tempLi.append(tempDiv);

    tempDiv.append(tempInput);
    tempDiv.append(tempLabel);

    this.documentElement.appendChild(tempLi);
  }
  onChange() {
    const inputElement = document.querySelectorAll(
      "ul.create-project-right-materials li input"
    );
    const btnLast = document.querySelector(
      ".create-project-right-nextbtn .btn-next-bid"
    );

    inputElement.forEach((itm) => {
      itm.addEventListener("click", function (event) {
        const id = event.target.id;
        const categoryId = event.target.name;

        const parentEl = event.target.parentElement.parentElement;
        const lbl = event.target.nextSibling.textContent;

        if (parentEl.classList.contains("active")) {
          parentEl.classList.remove("active");
        } else {
          const selectedItems = document.querySelectorAll(
            ".create-project-right-materials li.active"
          );
          selectedItems.forEach((selectedBtns) => {
            selectedBtns.classList.remove("active");
          });
        }
        parentEl.classList.add("active");

        btnLast.setAttribute("id", id);
        btnLast.setAttribute("isim", lbl);
        btnLast.setAttribute("cat", categoryId);
      });
    });
  }
}

export default Materials;
