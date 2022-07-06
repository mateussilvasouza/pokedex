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

mylocalStorage.forEach(value => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
    .then(response => response.json())
    .then(response => { 
        const result =  `<div class="card">
        <div class="card__info">
            <p class="info__name">${response.name}</p>
            <div class="info__stats">
            <div class="stats_attack">
                <div class="stats">${response.stats[1].base_stat}</div>
                <p class="stats__text">Attack</p>
            </div>
            <div class="stats_defense">
                <div class="stats">${response.stats[2].base_stat}</div>
                <p class="stats__text">Defense</p>
            </div>
        </div>
        <div class="card__types">
            <p>${response.types[0].type.name}</p>
        </div>
        </div>
        <div class="card__image">
            <img src="" alt="">
        </div>
        </div>`

        htmlResults.push(result)

    }
    ).finally(() => {
        target.innerHTML = htmlResults.join('')
    })}
)
