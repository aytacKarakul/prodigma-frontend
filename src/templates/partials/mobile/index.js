class MobileHeader{
    constructor(){
        this.mobileHamburgerBtn = document.querySelector('.site-mobile-header-hamburger');
        this.mobileHamburgerCloseBtn = document.querySelector('.site-mobile-header-wrapper-top-close');
        this.mobileNavLink = document.querySelectorAll('.site-mobile-header-nav > ul > li > a');

        this.mobileMenuOpenBtn = this.mobileHamburgerBtn;
        this.mobileMenuCloseBtn = this.mobileHamburgerCloseBtn;

        //Sub Menu Variables
        this.subMenuPrevChild = document.querySelectorAll('.site-mobile-header-list-img > ul > li > a');
        this.subMenu = document.querySelectorAll('.site-mobile-header-list-img > ul > li .site-mobile-header-list-img-submenu');
        this.subMenuSelectedItem = document.querySelectorAll('.site-mobile-header-list-img > ul > li.opened');

        const btnsHistory = document.querySelectorAll('.site-mobile-header-list-img-header a.back-to-history');

        //Menu First Link
        this.mobileNavLink?.forEach((event) => {
            event.addEventListener('click', (item) => {
                if(item.target.parentElement.classList.contains('opened')){
                    item.target.parentElement.classList.remove('opened');
                }else{
                    const selectedItem = document.querySelectorAll('.site-mobile-header-nav > ul > li.opened');
                    selectedItem.forEach((selected) => {
                        selected.classList.remove('opened');
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
                
                this.mobileNavLink.forEach((itms) => {
                    setTimeout(() => {
                        if(itms.parentElement.classList.contains('opened')){
                            itms.parentElement.classList.remove('opened');
                        }
                    }, 500);
                });
            }
        });

        //Submenu Container
        this.subMenuPrevChild?.forEach((subMenuLinks) => {
            subMenuLinks.addEventListener('click', () => {
                if(subMenuLinks.nextElementSibling){
                    if(subMenuLinks.parentElement.classList.contains('opened')){
                        subMenuLinks.parentElement.classList.remove('opened');
                    }else{
                        this.subMenuSelectedItem = document.querySelectorAll('.site-mobile-header-list-img > ul > li.opened');
                        this.subMenuSelectedItem.forEach((selected) => {
                            selected.classList.remove('opened');
                        });
                    }
                    subMenuLinks.parentElement.classList.add('opened');
                }
            });
        });
        
        //Submenu History Btn
        btnsHistory?.forEach((items) => {
            items.addEventListener('click', (selected) => {
                const openedClass = selected.target.parentElement.parentElement.parentElement.parentElement;

                if(openedClass.classList.contains('opened') || firstElementLi.classList.contains('opened')){
                    openedClass.classList.remove('opened');
                }else {
                    this.subMenuSelectedItem.forEach((selectedClass) => {
                        selectedClass.classList.remove('opened');
                    });
                }
            });
        });

        this.subMenuChilderen();

    }

    subMenuChilderen(){
        const subMenuChildBtn = document.querySelectorAll('.site-mobile-header-list-img-submenu > ul > li > a');
        subMenuChildBtn?.forEach((childBtn) => {
            childBtn.addEventListener('click', (e) => {
                const openedChildBtn = e.target.parentElement;
                if(openedChildBtn.classList.contains('opened')){
                    openedChildBtn.classList.remove('opened');
                }else{
                    const selectedBtns = document.querySelectorAll('.site-mobile-header-list-img-submenu > ul > li.opened');
                    selectedBtns.forEach((selectedItems) => {
                        selectedItems.classList.remove('opened');
                    });
                    openedChildBtn.classList.add('opened');
                }
            });
        });
    }
}
export default MobileHeader;