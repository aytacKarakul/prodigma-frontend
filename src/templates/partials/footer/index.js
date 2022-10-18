class Footer{
    constructor(){
        this.footerMenuWrapLink = document.querySelectorAll('.site-footer-top-menu .site-footer-top-sub-title');
        this.footerMenuAccordion();
    }

    footerMenuAccordion(){
        this.footerMenuWrapLink.forEach((items) => {
            items.addEventListener('click', (event) => {
                event.target.parentElement.classList.toggle('open');
            });
        });
    }

}

export default Footer;