export const MemberDropdown = () => {
    const menuTrigger = document.querySelector('.member-mobile-trigger');
    const memberMenuLinks = document.querySelectorAll('.member-bottom-content > ul > li > a');

    if(menuTrigger){
        menuTrigger.addEventListener('click', (e) => {
            if(e.target.parentElement.classList.contains('active')){
                e.target.parentElement.classList.remove('active');
            }else{
                e.target.parentElement.classList.add('active');
            }
        });
    }
    if(memberMenuLinks){
        memberMenuLinks.forEach((itm) => {
            const locationHref = window.location.pathname;
            
            if(itm.pathname === locationHref){
                itm.parentElement.classList.add('active');
            }else if (itm.parentElement.classList.contains('active')){
                const selectedItem = document.querySelectorAll('.member-bottom-content > ul > li.active');
                selectedItem.forEach((selected) => {
                    selected.classList.remove('active');
                });
            }
        });
    }
}