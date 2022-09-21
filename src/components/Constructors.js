//Criar elementos html e setar atributos
export const createElement = (element,attr,type) => {
    const created = document.createElement(element)
    created.setAttribute(attr,type)
    return created
}

//Adicionar um novo nó filho ao html
export const appendChild = (element, child) => {
    element.appendChild(child)
}

//Adicionar conteudo dentro do html
export const innerHTML = (element, text) => {
    element.innerHTML = text
}

//Atribui um backgroundColor personalizado ao por tipo de pokemon ao card
const setColorStyle = (typesElements, type) => {
    switch(type){
        case "normal":
           typesElements.style.backgroundColor = '#cf98a6'
           break
        case "fighting":
           typesElements.style.backgroundColor = '#f96240'
           break
        case "fire":
           typesElements.style.backgroundColor = '#F76545'
           break
        case "dragon":
           typesElements.style.backgroundColor = '#4acad8'
           break
        case "flying":
           typesElements.style.backgroundColor = '#8fb2c5'
           break
        case "poison":
           typesElements.style.backgroundColor = '#A974BC'
           break
        case "ground":
           typesElements.style.backgroundColor = '#714924'
           break
        case "rock":
           typesElements.style.backgroundColor = '#913e26'
           break
        case "bug":
           typesElements.style.backgroundColor = '#1c9857'
           break
        case "ghost":
           typesElements.style.backgroundColor = '#94688e'
           break
        case "steel":
           typesElements.style.backgroundColor = '#01bd97'
           break
        case "water":
           typesElements.style.backgroundColor = '#82a9f7'
           break
        case "grass":
           typesElements.style.backgroundColor = '#00ca5c'
           break
        case "electric":
           typesElements.style.backgroundColor = '#F7C545'
           break
        case "psychic":
           typesElements.style.backgroundColor = '#e9517b'
           break
        case "ice":
           typesElements.style.backgroundColor = '#d5f0f9'
           break
        case "dark":
           typesElements.style.backgroundColor = '#5a5a75'
           break
        case "fairy":
           typesElements.style.backgroundColor = '#f31b66'
           break
        case "shadow":
           typesElements.style.backgroundColor = '#322f58'
           typesElements.style.color = '#FFFFFF'
           break
        case "unknown":
           typesElements.style.backgroundColor = '#FFFFFF'
           break
       default:
           break
     }
}

//Construi a estrutura dos cards
export const buildCard = (response) => {
    // CreateElements
    const card = createElement('div','class','card')
    card.setAttribute('key',`${response.name}`)
    const card__info = createElement('div','class',"card__info")
    const info__name = createElement('p','class',"info__name")
    const info__stats = createElement('div','class',"info__stats")
    const stats__attack = createElement('div','class',"stats__attack")
    const attack = createElement('div','class',"stats")
    const stats__attack__text = createElement('p','class',"stats__text")
    const stats__defense = createElement('div','class',"stats__defense")
    const defense = createElement('div','class',"stats")
    const stats__defense__text = createElement('p','class',"stats__text")
    const card__types = createElement('div','class',"card__types")
    const card__image = createElement('div','class',"card__image")
    setColorStyle(card__image, `${response.types[0].type.name}`)
    const img = createElement('img','src',`${response.sprites.other.dream_world.front_default || response.sprites.other.home.front_default || response.sprites.front_default }`)
            
    // Insert innerHTML
    innerHTML(info__name, `${response.name[0].toUpperCase() + response.name.substr(1)}`)
    innerHTML(attack, `${response.stats[1].base_stat}`)
    innerHTML(stats__attack__text, "Attack")
    innerHTML(defense, `${response.stats[2].base_stat}`)
    innerHTML(stats__defense__text, "Defense")
    
    response.types.map( type => {
        const typesElements = createElement('p')
        innerHTML(typesElements, `${type.type.name[0].toUpperCase() + type.type.name.substr(1)}`)
        setColorStyle(typesElements, `${type.type.name}`)
        appendChild(card__types, typesElements)
    } )
    //Append elements
    appendChild(stats__defense, defense)
    appendChild(stats__defense, stats__defense__text)
    appendChild(stats__attack, attack)
    appendChild(stats__attack, stats__attack__text)
    appendChild(info__stats, stats__attack)
    appendChild(info__stats, stats__defense)
    appendChild(card__info, info__name)
    appendChild(card__info, info__stats)
    appendChild(card__info, card__types)
    appendChild(card__image, img)
    appendChild(card, card__info)
    appendChild(card, card__image)

    return card
}