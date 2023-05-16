import axios from "axios";
import { apitoken } from "../../../auth/authentication";

class SupplyForm {
    constructor(){
        this.FormWrapper = document.querySelector(".form-become-supply");
        this.textBox = document.querySelectorAll(".form-become-supply .textbox input");
        this.textArea = document.querySelector("#js-supply-address");
        
        //init functions
        if(this.FormWrapper){
            this.onUiCheckbox();
            this.onSubmit();
        }
    }
    onUiCheckbox = () => {
        const checkboxList = document.getElementById("js-supply-checkbox-cnc-process");
        const otherTecnology = document.getElementById("js-supply-checkbox-others");
        const otherTecnologyInput = document.getElementById("js-supply-input-others");
        const checkboxListInner = document.querySelector(".group-selectbox-inner");
        const otherInputWrapper = document.querySelector(".other-input-inner");
         
        checkboxList.addEventListener("change", (e) => {
            if (e.target.checked) {
                e.target.parentElement.parentElement.classList.add("open");
                checkboxListInner.classList.remove("hidden");
            }else{
                e.target.parentElement.parentElement.classList.remove("open");
                checkboxListInner.classList.add("hidden");
            }
        });
        otherTecnology.addEventListener("change", (e) => {
            console.log(e.target);
            if (e.target.checked) {
                e.target.parentElement.parentElement.classList.add("open");
                otherInputWrapper.classList.remove("hidden");
                otherTecnologyInput.removeAttribute('readonly');
            }else{
                e.target.parentElement.parentElement.classList.remove("open");
                otherInputWrapper.classList.add("hidden");
                otherTecnologyInput.setAttribute('readonly', true);
            }
        });
    }
    onSubmit = () => {
        document.querySelector(".btn-supply-save").addEventListener("click", function(event){
            event.preventDefault();
            const document_lang = document.documentElement.lang;

            var trans = {
                tr:{
                    name:"Ad soyad alanı boş geçilemez!",
                    company:"Şirket alanı boş geçilemez!",
                    phone:"Telefon alanı boş geçilemez!",
                    email:"E-posta alanı boş geçilemez!",
                    website:"Şirket web sayfası boş geçilemez!",
                    address:"Adres alanı boş geçilemez!",
                    capacity:"üretim kapasitesi alanı boş geçilemez!",
                    equipment:"Makine ve ekipmanlar alanı boş geçilemez!",
                    software:"Kullanılan yazılımlar alanı boş geçilemez!",
                    staff:"Nitelikli eleman sayısı alanı boş geçilemez!",
                },
                en:{
                    name:"Name Surname field cannot be empty!",
                    company:"Company field cannot be empty!",
                    phone:"Phone field cannot be empty!",
                    email:"Email field cannot be empty!",
                    website:"Company web page field cannot be empty!",
                    address:"Address field cannot be empty!",
                    capacity:"production capacity field cannot be left blank!",
                    equipment:"Machinery and equipment field cannot be left empty!",
                    software:"The software used field cannot be left blank!",
                    staff:"Qualified Number of Elements field cannot be left blank!",
                }
            }

            const textBoxs = document.querySelectorAll(".form-become-supply .textbox input, .form-become-supply .textarea textarea");

            const nameSurname = document.querySelector("#js-supply-user-name-surname");
            const company = document.querySelector("#js-supply-user-name-company");
            const phone = document.querySelector("#js-supply-user-phone");
            const email = document.querySelector("#js-supply-user-email");
            const website = document.querySelector("#js-supply-website");
            const address = document.querySelector("#js-supply-address");
            const capacity = document.querySelector("#js-supply-product-capacity");
            const equipment = document.querySelector("#js-supply-machine-equipment");
            const software = document.querySelector("#js-supply-useing-software");
            const staff = document.querySelector("#js-supply-qualified-staff");
            //checkboxList
            const checkCncProcess = document.getElementById("js-supply-checkbox-cnc-process");
            const checkboxAxis3 = document.getElementById("js-supply-checkbox-axis-3");
            const checkboxAxis4 = document.getElementById("js-supply-checkbox-axis-4");
            const checkboxAxis5 = document.getElementById("js-supply-checkbox-axis-5");
            const sheetMetal = document.querySelector("#js-supply-checkbox-sheet-metal");
            const injection = document.querySelector("#js-supply-checkbox-injection");
            const silicone = document.querySelector("#js-supply-checkbox-silicone"); 
            const otherInput = document.querySelector("#js-supply-input-others"); 

            textBoxs.forEach((items) => {
                const uiText = items.value.trim();
                items.value = uiText;
            });

            if(nameSurname.value === ""){
                alert(`${document_lang === "tr" ? trans.tr.name : trans.en.name}`);
            }else if(company.value === ""){
                alert(`${document_lang === "tr" ? trans.tr.name : trans.en.name}`);
            }
            else if(phone.value === ""){
                alert(`${document_lang === "tr" ? trans.tr.phone : trans.en.phone}`);
            }else if(email.value === ""){
                alert(`${document_lang === "tr" ? trans.tr.email : trans.en.email}`);
            }else if(website.value === "") {
                alert(`${document_lang === "tr" ? trans.tr.website : trans.en.website}`);
            }else if(address.value === ""){
                alert(`${document_lang === "tr" ? trans.tr.address : trans.en.address}`);
            }
            else if(capacity.value === ""){
                alert(`${document_lang === "tr" ? trans.tr.capacity : trans.en.capacity}`);
            }else if(equipment.value === ""){
                alert(`${document_lang === "tr" ? trans.tr.equipment : trans.en.equipment}`);
            }else if(software.value === ""){
                alert(`${document_lang === "tr" ? trans.tr.software : trans.en.software}`);
            }else if(staff.value === ""){
                alert(`${document_lang === "tr" ? trans.tr.staff : trans.en.staff}`);
            }else{

                var formData = new FormData(this.FormWrapper);
                let isCncSelected;
                let isThreeAxisSelected;
                let isFourAxisSelected;
                let isFiveAxisSelected;
                let isSheetMetalSelected;
                let isInjectionSelected;
                let isSiliconeSelected;
                checkCncProcess.checked ? isCncSelected = 1 : isCncSelected = 0;
                checkboxAxis3.checked ? isThreeAxisSelected = 1 : isThreeAxisSelected = 0;
                checkboxAxis4.checked ? isFourAxisSelected = 1 : isFourAxisSelected = 0;
                checkboxAxis5.checked ? isFiveAxisSelected = 1 : isFiveAxisSelected = 0;
                sheetMetal.checked ? isSheetMetalSelected = 1 : isSheetMetalSelected = 0;
                injection.checked ? isInjectionSelected = 1 : isInjectionSelected = 0;
                silicone.checked ? isSiliconeSelected = 1 : isSiliconeSelected = 0;

                formData.append("adsoyad", nameSurname.value);
                formData.append("sirket", company.value);
                formData.append("telefon", phone.value);
                formData.append("eposta", email.value);
                formData.append("web", website.value);
                formData.append("adres", address.value);
                formData.append("cnc_isleme", isCncSelected);
                formData.append("x3", isThreeAxisSelected);
                formData.append("x4", isFourAxisSelected);
                formData.append("x5", isFiveAxisSelected);
                formData.append("sac_metal_sekillendirme", isSheetMetalSelected);
                formData.append("enjeksiyon_kaliplama", isInjectionSelected);
                formData.append("silikon_kaliplama", isSiliconeSelected);
                formData.append("diger", otherInput.value);
                formData.append("uretim_kapasitesi", capacity.value);
                formData.append("makine_ve_ekipmanlar", equipment.value);
                formData.append("kullanilan_yazilimlar", software.value);
                formData.append("nitelikli_eleman_sayisi", staff.value);

                axios({
                    method: "post",
                    url: `${process.env.API_KEY}` + "/tedarikci-forms/create",
                    data: formData,
                    headers: { "Content-Type": "multipart/form-data" },
                    auth: {
                      username: "prodigma3d",
                      password: apitoken,
                    },
                  }).then((response) => {
                    if(response.status === 200 && response.data.message){
                        alert(response.data.message);
                    }
                }).catch((response) => response);
            }
        });
    }
} 

export default SupplyForm;