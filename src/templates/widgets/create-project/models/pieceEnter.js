export default function PieceEnterModel(){
    let createProjectRight = document.querySelector('.create-project-right-inner');

    let pieceModelWrap = document.createElement('div');
    pieceModelWrap.className = 'create-project-right-piece';

    pieceModelWrap.innerHTML = `
    <div class='create-project-right-piece-wrap'>
        <a href='#' class='decrease'><i class='icon icon-minus'></i></a>
        <input type='number' min='1' max='30' />
        <a href='#' class='increase'><i class='icon icon-plus'></i></a>
    </div>
    `;

    createProjectRight.appendChild(pieceModelWrap);
    return pieceModelWrap;
}