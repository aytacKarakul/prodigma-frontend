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
      ".create-project-right-materials"
    );

    this.init();
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
    tempInput.setAttribute("kategori_id", this.kategori_id);
    tempInput.setAttribute("price", this.fiyat);

    //template li > div > abel create
    let tempLabel = document.createElement("label");
    tempLabel.setAttribute("for", "js-material-keys");
    tempLabel.textContent = this.isim;

    //append elements
    tempLi.append(tempDiv);

    tempDiv.append(tempInput);
    tempDiv.append(tempLabel);

    this.documentElement.append(tempLi);
  }
}

export default Materials;
