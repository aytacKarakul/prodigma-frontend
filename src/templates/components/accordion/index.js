class Accordion {

    constructor(){
        this.main = '.accordion';
        this.item = '.acc-item';
        this.btn = '.acc-header > button';
        this.cls = 'active';

        this.addEvent();
    }

    addEvent() {
        
        document.querySelectorAll(this.main).forEach(function(acc){
            acc.querySelectorAll('.acc-header > button').forEach(function(btn){
                btn.addEventListener('click', function(){
                    this.prn = this.closest('.acc-item'),
                    this.main = this.closest('.accordion'),
                    this.type = this.main.getAttribute('data-type');

                    if(this.prn.classList.contains('active')){
                        this.prn.classList.remove('active');
                    }else{
                        if(this.type == 'connected')
                            this.main.querySelectorAll('.acc-item').forEach(function(elm){
                                elm.classList.remove('active');
                        });
                        this.prn.classList.add('active');
                    }
                });
            });
        });
    }
}

export default Accordion;