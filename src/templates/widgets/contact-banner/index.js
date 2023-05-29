import axios from "axios";
import { apitoken } from "../../auth/authentication";

class ContactPageForm {
    constructor(){
        this.api = localStorage.getItem("apitoken");
        this.FormWrapper = document.getElementById("contact-page-form-saved");
        this.textBox = document.querySelectorAll("#contact-page-form-saved .textbox input");
        this.textArea = document.querySelector("#js-contact-form-address");
        
        //init functions
        if(this.FormWrapper){
            this.onSubmit();
        }
    }
    onSubmit = () => {
        document.querySelector("#contact-page-form-send-btn").addEventListener("click", function(event){
            event.preventDefault();
            const document_lang = document.documentElement.lang;

            var trans = {
                tr:{
                    validate:"Lütfen her alanı doldurun!",
                },
                en:{
                    validate:"Please fill out each field!",
                }
            }

            const textBoxs = document.querySelectorAll("#contact-page-form-saved .textbox input, .form#contact-page-form-saved .textarea textarea");

            const name = document.querySelector("#js-contact-form-name");
            const surname = document.querySelector("#js-contact-form-surname");
            const email = document.querySelector("#js-contact-form-email");
            const phone = document.querySelector("#js-contact-form-phone");
            const address = document.querySelector("#js-contact-form-address");

            textBoxs.forEach((items) => {
                const uiText = items.value.trim();
                items.value = uiText;
            });

            if(name.value === "" || surname.value === "" || email.value === "" || phone.value === "" || address.value === ""){
                alert(`${document_lang === "tr" ? trans.tr.validate : trans.en.validate}`);
            }else{

                var formData = new FormData(this.FormWrapper);

                formData.append("ad", name.value);
                formData.append("soyad", surname.value);
                formData.append("telefon", phone.value);
                formData.append("eposta", email.value);
                formData.append("mesaj", address.value);

                axios({
                    method: "post",
                    url: `${process.env.API_KEY}` + "/forms/create",
                    data: formData,
                    headers: { "Content-Type": "multipart/form-data" },
                    auth: {
                      username: "prodigma3d",
                      password: this.api,
                    },
                  }).then((response) => {
                    console.log(response);
                    if(response.status === 200 && response.data.message){
                        alert(response.data.message);
                    }
                }).catch((response) => response);
            }
        });
    }
} 

export default ContactPageForm;