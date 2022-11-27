export const basketSummaryBtnClick = () => {
    const btnBasketSummaryApproval = document.querySelector('#js-bsket-summary-approvel-btn');
    const basketSummaryWrapper = document.querySelector('.basket-summary');

    if(btnBasketSummaryApproval || basketSummaryWrapper){
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
    }
}