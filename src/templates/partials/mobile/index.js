class MobileHeader{
    constructor(){
        this.mobileHamburgerBtn = document.querySelector('.site-mobile-header-hamburger');
        this.mobileHamburgerCloseBtn = document.querySelector('.site-mobile-header-wrapper-top-close');

        this.mobileMenuOpenBtn = this.mobileHamburgerBtn;
        this.mobileMenuCloseBtn = this.mobileHamburgerCloseBtn;

        this.mobileMenuOpenBtn?.addEventListener('click', () => {
            document.body.classList.add('site-mobile-header-menu-open');
        });
        this.mobileMenuCloseBtn?.addEventListener('click', () => {
            if(document.body.classList.contains('site-mobile-header-menu-open')){
                document.body.classList.remove('site-mobile-header-menu-open');
            }
        });
    }
}
export default MobileHeader;