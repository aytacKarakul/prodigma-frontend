import {getUserId} from "../../utils/localStorage";

class CreateProjectBanner{
    constructor(){
        this.initFuc();
    }

    initFuc(){
        const elementWrapper = document.querySelector(".create-banner");
        const elementBtn = document.querySelector("#js-create-banner-hpage-btn");
        if(elementWrapper && getUserId()){
            elementBtn.pathname = "/proje-baslat.html";
        }
    }
}

export default CreateProjectBanner;