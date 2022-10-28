class MobileHeader{
    constructor(){
        this.mobileHamburgerBtn = document.querySelector('.site-mobile-header-hamburger');
        this.mobileHamburgerCloseBtn = document.querySelector('.site-mobile-header-wrapper-top-close');
        this.mobileNavLink = document.querySelectorAll('.site-mobile-header-nav > ul > li > a');

        this.mobileMenuOpenBtn = this.mobileHamburgerBtn;
        this.mobileMenuCloseBtn = this.mobileHamburgerCloseBtn;

        this.mobileNavLink?.forEach((event) => {
            event.addEventListener('click', (item) => {
                if(item.target.parentElement.classList.contains('opened')){
                    item.target.parentElement.classList.remove('opened');
                }else{
                    const openedClass = document.querySelectorAll('.site-mobile-header-nav > ul > li.opened');
                    openedClass.forEach((itemClass) => {
                        itemClass.classList.remove('opened');
                    });
                    item.target.parentElement.classList.add('opened');
                }
            });
        });

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