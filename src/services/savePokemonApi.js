const mylocalStorage = localStorage.getItem('pokemon').split(',')
const pokemonInfo = []

function getPokemonInfo(){
    mylocalStorage.forEach(value => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then(response => response.json())
        .then(response => { pokemonInfo.push(response)}
        )}
    )
}

const target = document.getElementById('render')
getPokemonInfo()

const htmlResults = []


const createElement = (element,attr,type) => {

    const created = document.createElement(element)
    
    created.setAttribute(attr,type)

    return created

}

const requests = []

mylocalStorage.forEach(value => {

    requests.push(fetch(`https://pokeapi.co/api/v2/pokemon/${value}`).then(response => response.json()))

    //     fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
    // .then(response => response.json())
    // .then(response => { 
    //     // console.log(response)

    //     // CreateElements
    //     const card = createElement('div','class','card')
    //     console.log('A BOA TA AQUId', card)

    //     const card__info = document.createElement('div').setAttribute('class',"card__info")
    //     const info__name = document.createElement('p').setAttribute('class',"info__name")
    //     const info__stats = document.createElement('div').setAttribute('class',"info__stats")
    //     const stats__attack = document.createElement('div').setAttribute('class',"stats__attack")
    //     const attack = document.createElement('div').setAttribute('class',"stats")
    //     const stats__attack__text = document.createElement('p').setAttribute('class',"stats__text")
    //     const stats__defense = document.createElement('div').setAttribute('class',"stats__defense")
    //     const defense = document.createElement('div').setAttribute('class',"stats__defense")
    //     const stats__defense__text = document.createElement('p').setAttribute('class',"stats__text")
    //     const card__types = document.createElement('div').setAttribute('class',"card__types")
    //     const types_name = document.createElement('p')
    //     const card__image = document.createElement('div').setAttribute('class',"card__image")
    //     const img = document.createElement('img').setAttribute('src',`${response.sprites.other.dream_world.front_default}`)


    //     // Insert innerHTML
    //     info__name.innerText = `${response.name}`
    //     attack.innerText = `${response.stats[1].base_stat}`
    //     stats__attack__text.innerText = "attack"
    //     defense.innerText = `${response.stats[2].base_stat}`
    //     stats__defense__text.innerText = "Defense"
    //     types_name.innerText = `${response.types[0].type.name}`

    //     //Append elements
    //     stats__defense.appendChild(defense)
    //     stats__defense.appendChild(stats__defense__text)
    //     stats__attack.appendChild(attack)
    //     stats__attack.appendChild(stats__attack__text)
    //     info__stats.appendChild(stats__attack)
    //     info__stats.appendChild(stats__defense)
    //     card__types.appendChild(types_name)
    //     card__info.appendChild(info__name)
    //     card__info.appendChild(info__stats)
    //     card__info.appendChild(card__types)
    //     card__image.appendChild(img)
    //     card.appendChild(card__info)
    //     card.appendChild(card__image)

    //     // const result =  `<div class="card">
    //     //                     <div class="card__info">
    //     //                         <p class="info__name">${response.name}</p>
    //     //                         <div class="info__stats">
    //     //                             <div class="stats__attack">
    //     //                                 <div class="stats">${response.stats[1].base_stat}</div>
    //     //                                 <p class="stats__text">Attack</p>
    //     //                             </div>
    //     //                             <div class="stats__defense">
    //     //                                 <div class="stats">${response.stats[2].base_stat}</div>
    //     //                                 <p class="stats__text">Defense</p>
    //     //                             </div>
    //     //                         </div>
    //     //                         <div class="card__types">
    //     //                             <p>${response.types[0].type.name}</p>
    //     //                         </div>
    //     //                     </div>
    //     //                     <div class="card__image">
    //     //                         <img src="${response.sprites.other.dream_world.front_default}" alt="">
    //     //                     </div>
    //     //                 </div>`

    //     // htmlResults.push(result)
    //     target.appendChild(card)
    // })
    // ).finally(() => {
    //     target.innerHTML = htmlResults.join('')
    // })}
})


Promise.all(requests).then(response => console.log(response))