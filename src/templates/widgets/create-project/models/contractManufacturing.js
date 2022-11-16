export default function ContractManufactureModel(){
    let createProjectRight = document.querySelector('.create-project-right-inner');
    
    const trans = {
        textFasonUretim: 'Fason Üretim istiyorum',
        textFasonUretimAciklama: 'Kalıp üretimine ek olarak kalıptan ürün üretimi hizmeti de alabilirsiniz.',
    };

    let contractManufactured = document.createElement('div');
    contractManufactured.className = 'create-project-right-patern';

    contractManufactured.innerHTML = `
    <div class='create-project-right-patern-t1'>
        <div class='input radio'>
            <input type="radio" id="js-injection-pattern-check" />
            <label for="js-injection-pattern-check">${trans.textFasonUretim}</label>
        </div>
    </div>
    <div class='create-project-right-patern-t2'>${trans.textFasonUretimAciklama}</div>
    `;

    createProjectRight.appendChild(contractManufactured);
    return contractManufactured;
}