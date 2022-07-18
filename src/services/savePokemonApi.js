const mylocalStorage = localStorage.getItem('pokemon').split(',')
const target = document.getElementById('render')
const requests = []
const htmlResults = []

const createElement = (element,attr,type) => {

    const created = document.createElement(element)
    
    created.setAttribute(attr,type)

    return created

}

const appendChild = (element, child) => {
    element.appendChild(child)
}

const innerHTML = (element, text) => {
    element.innerHTML = text
}

mylocalStorage.forEach(value => {
    requests.push(fetch(`https://pokeapi.co/api/v2/pokemon/${value}`).then(response => response.json()).then(response => response))
})

const buildHTML = (response) => {
    // CreateElements
    const card = createElement('div','class','card')
    const card__info = createElement('div','class',"card__info")
    const info__name = createElement('p','class',"info__name")
    const info__stats = createElement('div','class',"info__stats")
    const stats__attack = createElement('div','class',"stats__attack")
    const attack = createElement('div','class',"stats")
    const stats__attack__text = createElement('p','class',"stats__text")
    const stats__defense = createElement('div','class',"stats__defense")
    const defense = createElement('div','class',"stats__defense")
    const stats__defense__text = createElement('p','class',"stats__text")
    const card__types = createElement('div','class',"card__types")
    const types_name = createElement('p')
    const card__image = createElement('div','class',"card__image")
    const img = createElement('img','src',`${response.sprites.other.dream_world.front_default}`)

     // Insert innerHTML
     innerText(info__name, `${response.name}`)
     innerText(attack, `${response.stats[1].base_stat}`)
     innerText(stats__attack__text, "attack")
     innerText(defense, `${response.stats[2].base_stat}`)
     innerText(stats__defense__text, "Defense")
     innerText(types_name, `${response.types[0].type.name}`)

    //Append elements
    appendChild(stats__defense, defense)
    appendChild(stats__defense, stats__defense__text)
    appendChild(stats__attack, attack)
    appendChild(stats__attack, stats__attack__text)
    appendChild(info__stats, stats__attack)
    appendChild(info__stats, stats__defense)
    appendChild(card__types, types_name)
    appendChild(card__info, info__name)
    appendChild(card__info, info__stats)
    appendChild(card__info, card__types)
    appendChild(card__image, img)
    appendChild(card, card__info)
    appendChild(card, card__image)

    return card
}

Promise.all(requests).then(response => htmlResults.push(buildHTML(response)))