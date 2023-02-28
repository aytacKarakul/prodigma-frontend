import { getLanguage } from "../../../utils/localStorage";
class TecnicGraphUpload {
  constructor(file) {
    this.file = file;
    this.elementWrapper = document.querySelector(
      ".create-project-right-append-elements"
    );

    this.initFunc();
    this.onClickHandler();
  }
  initFunc() {
    if (this.elementWrapper) {
      const lang = getLanguage();

      const trans = {
        tr: {
          textTecnicText: "Teknik Çizim Görseli yükleyin (PDF&DWG)",
          textTecnicText2: "ya da görseli sürükleyip bırakın",
        },
        en: {
          textTecnicText: "Upload Image (PDF DWG)",
          textTecnicText2: "or drag and drop image",
        },
      };

      let tempDiv = document.createElement("div");
      tempDiv.className = "create-project-right-technical";

      let tempDivTitle = document.createElement("div");
      tempDivTitle.className = "create-project-right-technical-t1";
      if (lang == "tr") {
        tempDivTitle.textContent = `${trans.tr.textTecnicText}`;
      } else if (lang == "en") {
        tempDivTitle.textContent = `${trans.en.textTecnicText2}`;
      }

      let tempDivTitle2 = document.createElement("div");
      tempDivTitle2.className = "create-project-right-technical-t2";
      if (lang == "tr") {
        tempDivTitle2.textContent = `${trans.tr.textTecnicText}`;
      } else if (lang == "en") {
        tempDivTitle2.textContent = `${trans.en.textTecnicText2}`;
      }

      let tempDivInput = document.createElement("input");
      tempDivInput.setAttribute("type", "file");
      tempDivInput.setAttribute("id", "create_project_tecnic_file_upload");
      tempDivInput.setAttribute("accept", "image/*,.pdf");

      let tempDivAnchor = document.createElement("a");
      tempDivAnchor.className = "tecnical-file-upload";
      tempDivAnchor.setAttribute("href", "javascript:void(0);");

      let tempDivAnchorIcon = document.createElement("i");
      tempDivAnchorIcon.className = "icon icon-arrow-line";

      //elements append to
      tempDiv.append(tempDivTitle);
      tempDiv.append(tempDivTitle2);
      tempDiv.append(tempDivInput);
      tempDiv.append(tempDivAnchor);
      tempDivAnchor.append(tempDivAnchorIcon);

      this.elementWrapper.append(tempDiv);
    }
  }
  onClickHandler() {
    console.log("Tecnic file module");
  }
}
export default TecnicGraphUpload;
