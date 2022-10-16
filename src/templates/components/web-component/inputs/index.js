class Inputs {
    constructor(setClass, removeClass){
        this.el = document.querySelectorAll('.input.textbox > .wrp input');
        this.setClass = setClass;
        this.removeClass = removeClass;

        this.onFocusInit();
    }

    onFocusInit(){

        this.el?.forEach((element) => {
            element.addEventListener('keypress', () => {
                element.parentElement.parentElement.classList.add('input-focus');
            });
            element.addEventListener('blur', () => {
                if(element.value == ""){
                    element.parentElement.parentElement.classList.remove('input-focus');
                }
            });
        });

    }   

}

export default Inputs;