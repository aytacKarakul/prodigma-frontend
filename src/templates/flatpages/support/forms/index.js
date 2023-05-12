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
        const checkboxListInner = document.querySelector(".group-selectbox-inner");
         
        checkboxList.addEventListener("change", (e) => {
            if (e.target.checked) {
                e.target.parentElement.parentElement.classList.add("open");
                checkboxListInner.classList.remove("hidden");
            }else{
                e.target.parentElement.parentElement.classList.remove("open");
                checkboxListInner.classList.add("hidden");
            }
        });
    }
    onSubmit = () => {
        document.querySelector(".btn-supply-save").addEventListener("click", function(event){
            event.preventDefault();

            const textBoxs = document.querySelectorAll(".form-become-supply .textbox input, .form-become-supply .textarea textarea");
            //checkboxList
            const checkboxList = document.getElementById("js-supply-checkbox-cnc-process");
            const checkboxAxis3 = document.getElementById("js-supply-checkbox-axis-3");
            const checkboxAxis4 = document.getElementById("js-supply-checkbox-axis-4");
            const checkboxAxis5 = document.getElementById("js-supply-checkbox-axis-5");

            textBoxs.forEach((items) => {
                const uiText = items.value.trim();
                items.value = uiText;

                if(items.value === ""){
                    console.log("Lütfen ilgili alanları doldurunuz");
                }else{
                    console.log("Alanlar dolu");
                }
            });
            if (checkboxList.checked) {
                if(checkboxAxis3.checked == false && checkboxAxis4.checked == false && checkboxAxis5.checked == false){
                    alert("Lütfen CNC İşleme seçeneklerinden en az bir tane seçiniz!")
                }else{
                    console.log("Devam edebilirsiniz");
                }
            }
        });
    }
} 

export default SupplyForm;