export const MemberDropdown = () => {
    const menuTrigger = document.querySelector('.member-mobile-trigger');
    if(menuTrigger){
        menuTrigger.addEventListener('click', (e) => {
            if(e.target.parentElement.classList.contains('active')){
                e.target.parentElement.classList.remove('active');
            }else{
                e.target.parentElement.classList.add('active');
            }
        });
    }
}