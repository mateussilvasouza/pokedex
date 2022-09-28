import { buildCard } from "./Constructors.js"

//Altera a visualização do modal dos filtros entre abrir e fechar
export function viewModal(modalId){
    const modal = document.getElementById(modalId)
    let arrowList = Array.from(document.getElementsByClassName('arrow__icon'))
    let arrow = arrowList.find( element => {if(element.getAttribute('key') === modalId) return element})
    if((modal.classList).contains('open')){
        modal.classList.remove('open')
        arrow.classList.remove('open')
    } else {
        modal.classList.add('open')
        arrow.classList.add('open')
    }
}

//Remove o que está renderizado
export const clearRender = (element) => {
    while(element.hasChildNodes()) {
        element.removeChild(element.firstChild)
    }
}

//Renderiza os cards
export const renderCard = (element, target) => {
    const card = buildCard(element)
    //Adiciona cada resultado com a estrutura HTML montada a página
    target.appendChild(card)
}