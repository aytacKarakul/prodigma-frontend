import 'Images/logo.svg';

class Header{
    constructor(){
        this.header = document.querySelector('.site-header');

        this.initHeader();
    }

    initHeader(){
        this.header.addEventListener('mouseenter', (event) => {
            event.target.classList.add('site-header-anim');
        });
        this.header.addEventListener('mouseleave', (event) => {
            event.target.classList.remove('site-header-anim');
        });
    }
}

export default Header;