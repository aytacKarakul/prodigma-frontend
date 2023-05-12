import axios from "axios";
import { apitoken } from "../../auth/authentication";

export const submitSubscribeOnClick = () => {
    const formSubscribe = document.querySelector("#subscribetin-form");
    
    formSubscribe.addEventListener("submit", function (event) {
        event.preventDefault();
        if(this){
            // get form element
            const formInput = document.querySelector("#js-user-subscribe-email");
            const inputUi = formInput.value.trim();
            // email regex
            const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if(inputUi.match(emailFormat)){
                console.log(inputUi);

                //set form data
                const formSubscribeData = new FormData(formSubscribe);
                formSubscribeData.append("eposta", inputUi)

                //axios
                axios.post({
                    method: "post",
                    url: `${process.env.API_KEY}` + "/forms/create",
                    data: formSubscribeData,
                    headers: { "Content-Type": "form-data" },
                    auth: {
                      username: "prodigma3d",
                      password: apitoken,
                    },
                }).then(res => {
                    console.log(res);
                }).catch((error) => console.log(error))
            }else{
                console.log("Lütfen bir email giriniz.");
            }
        }        
    });
}