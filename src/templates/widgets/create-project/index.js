//import getAllCategories from "./slider";
//import Metal from "./models/metal-working";
//import Model3D from "./models/3d-model";
//import Industrial from "./models/industrial";
//import ReverseEngineer from "./models/reverse-engineering/reverseEnginee";
//import CncIsleme from "./models/cnc";
//import PostProcess from "./models/successive-processes";

class CreateProject {
  constructor() {
    const container = document.querySelector(".create-project");
    const btnTR = document.getElementById("lng-tr");
    const btnEN = document.getElementById("lng-en");
    const iframeContent = document.getElementById("data-lang-iframe");

    if (container) {
      if (localStorage.getItem("lng") === "tr") {
        btnEN.classList.remove("selected");
        btnTR.classList.add("selected");
        iframeContent.src =
          "https://demo.amfg.ai/new/live/promakim.en.trl.html";
      }
      if (localStorage.getItem("lng") === "en") {
        btnTR.classList.remove("selected");
        btnEN.classList.add("selected");
        iframeContent.src =
          "https://demo.amfg.ai/new/live/promakim_en_eur.html";
      }

      btnTR.addEventListener("click", function () {
        btnEN.classList.remove("selected");
        btnTR.classList.add("selected");
        localStorage.setItem("lng", "tr");

        iframeContent.src =
          "https://demo.amfg.ai/new/live/promakim.en.trl.html";
      });
      btnEN.addEventListener("click", function () {
        btnTR.classList.remove("selected");
        btnEN.classList.add("selected");
        localStorage.setItem("lng", "en");

        iframeContent.src =
          "https://demo.amfg.ai/new/live/promakim_en_eur.html";
      });
    }
    //getAllCategories();
    //new Metal();
    //new Model3D();
    //new Industrial();
    //new ReverseEngineer();
    //new CncIsleme();
    //new PostProcess();
  }
}

export default CreateProject;
