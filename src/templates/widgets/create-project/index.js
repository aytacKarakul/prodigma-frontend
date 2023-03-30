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
    const wrapperTR = document.getElementById("data-lang-tr");
    const wrapperEN = document.getElementById("data-lang-en");

    if (container) {
      btnTR.addEventListener("click", function () {
        btnEN.classList.remove("selected");
        this.classList.add("selected");
        localStorage.setItem("lng", "tr");

        wrapperEN.style.display = "none";
        wrapperTR.style.display = "block";
      });
      btnEN.addEventListener("click", function () {
        btnTR.classList.remove("selected");
        this.classList.add("selected");
        localStorage.setItem("lng", "en");

        wrapperEN.style.display = "block";
        wrapperTR.style.display = "none";
      });
      if (localStorage.getItem("lng") == "tr") {
        btnEN.classList.remove("selected");
        btnTR.classList.add("selected");

        wrapperEN.style.display = "none";
        wrapperTR.style.display = "block";
      } else if (localStorage.getItem("lng") === "en") {
        btnTR.classList.remove("selected");
        btnEN.classList.add("selected");

        wrapperEN.style.display = "block";
        wrapperTR.style.display = "none";
      }
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
