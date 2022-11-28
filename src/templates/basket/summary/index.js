export const basketSummaryBtnClick = () => {
    const btnBasketSummaryApproval = document.querySelector('#js-bsket-summary-approvel-btn');
    const basketSummaryWrapper = document.querySelector('.basket-summary');
    const basketSummaryVail = document.querySelector('.vail-summary');

    if(btnBasketSummaryApproval || basketSummaryWrapper || basketSummaryVail){
        btnBasketSummaryApproval.addEventListener('click', () => {
            if(basketSummaryWrapper.classList.contains('open')){
                basketSummaryWrapper.classList.remove('open');
                document.body.classList.remove('noScrolling');
            }
            else{
                basketSummaryWrapper.classList.add('open');
                document.body.classList.add('noScrolling');
            }
        });
        basketSummaryVail.addEventListener('click', () => {
            document.body.classList.remove('noScrolling');
            basketSummaryWrapper.classList.remove('open');
        });
    }
}

export const summaryDiscountTrigger = () => {
    const discountBtn = document.querySelector('.basket-summary-to-total-discount-code-trigger');
    if(discountBtn){
        discountBtn.addEventListener('click', (event) => {
            if(event.target.parentElement.classList.contains('open')){
                event.target.parentElement.classList.remove('open')
            }
            else{
                event.target.parentElement.classList.add('open')
            }
        });
    }
}