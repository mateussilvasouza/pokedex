import { createElement, innerHTML } from "../components/Constructors.js"
import { clearRender, renderCard, viewModal } from "../components/Behavior.js"
/**Declaração de variáveis*/
//<------------- Início ---------------->
const myPokemon = JSON.parse(localStorage.getItem('pokemon').split(','))
const myTypes = localStorage.getItem('types').split(',')
const myRegions = localStorage.getItem('regions').split(',')
const body = document.getElementsByTagName('body')[0]
//<--------------- Fím ----------------->

/**Funções construtoras globais */
//<------------- Início ---------------->
//Recebe o Id do elemento na página e retorna o html
const getElementById = (Id) => {
    const element = document.getElementById(Id)
    return element
}

//Retorna um array de pokemons cujo nome contém a string informada na barra de pesquisa
const handleChange = (Id) => {
    const search = getElementById(Id);
    const names = myPokemon.filter(name => {
        if(name.substring(0,search.value.length) == search.value && search.value.length != 0) return(name)
    })
    const renderSearch = htmlResults.filter(pokemon => {
        if(pokemon.name == (names.filter(name => name == pokemon.name))) return pokemon
    })

    return renderSearch
}

//Renderiza os filtros
const renderFilter = (array,Id)=> {
    const modal = getElementById(Id)

    array.forEach(type => {
        const li = createElement('li','key', `${type}`)
        li.addEventListener('click', ()=>{
            body.dispatchEvent(new Event('click'));
        })
        const label = createElement('label','for', `${type}`)
        const checkbox = createElement('input', 'type', 'checkbox')
        checkbox.setAttribute('id',`${type}`)
        checkbox.setAttribute('value', `${type}`)
        checkbox.addEventListener('click', ()=>{
            viewModal(Id)
        })
        innerHTML(label,`${type[0].toUpperCase() + type.substr(1)}`)
        li.appendChild(checkbox)
        li.appendChild(label)
        modal.appendChild(li)
    })
}


//Retorna os filtros ativos
const getCheckedFilter = (Id)=>{
    const element = getElementById(Id)
    const arrayChilds = Array.from(element.childNodes).map(li => { 
        return(li)
    })
    const checked = arrayChilds.map(li => {
        if(li.firstChild.checked) return (li.firstChild.value)
    })
    const result = checked.filter(li => {if(!!li) return li})
    return result
}

//Renderização dos pokemons em interação com a página
const render = (SearchID, FilterId) => {
    let searchFilter = handleChange(SearchID)
    let typeFilter = getCheckedFilter(FilterId)
    //Caso ambos os filtros estejam vazios renderiza tudo
    clearRender(target)
    if(!searchFilter.length && !typeFilter.length){
        htmlResults.forEach(pokemon => renderCard(pokemon, target))
    //Caso apenas o searchFilter esteja vazio renderiza os filtros
    } else if(!searchFilter.length) {
        let pokemons = htmlResults.filter(pokemon => {
            return !pokemon.types.filter(type => typeFilter.includes(type.type.name)).length == 0
        })
       pokemons.forEach(pokemon => renderCard(pokemon, target))
    } else if(!typeFilter.length){
        searchFilter.forEach(response => renderCard(response, target))
    } else {
        let pokemons = searchFilter.filter(pokemon => {
            return !pokemon.types.filter(type => typeFilter.includes(type.type.name)).length == 0
        })
        pokemons.forEach(pokemon => renderCard(pokemon, target))
    }
}
//<------------- Fím ---------------->

/**Inserção de eventos em elementos específicos*/
const search = getElementById('search')
const target = getElementById('render')
const typeButton = getElementById('type')
const regionButton = getElementById('region')

search.addEventListener('input', () =>{
    body.dispatchEvent(new Event('click'));
})

body.addEventListener('click', ()=>{
    render('search','modalType')}
)

typeButton.addEventListener('click', () => {
    viewModal('modalType')}
)

regionButton.addEventListener('click', () => {
    viewModal('modalRegion')}
)

renderFilter(myTypes,'modalType')
renderFilter(myRegions,'modalRegion')

//<------------- Fím ---------------->

/**Renderização inicial de Pokemons*/
//<------------- Início ---------------->


//Armazena o Json das promises
const requests = []

//Realiza e adiciona as Promises do fetch dentro do requests
myPokemon.forEach(value => {
    requests.push(
        fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then(response => response.json()))
})

//Armazena o resultado do Promise All
const htmlResults = []

//Resolve todas as promises e adiciona o resultado ao htmlResults 
Promise.all(requests)
    .then(response => {
        response.forEach(response => {
            htmlResults.push(response)})})
    .then( () => {
        htmlResults.forEach(response => renderCard(response, target))
    })


//<------------- Fím ---------------->
