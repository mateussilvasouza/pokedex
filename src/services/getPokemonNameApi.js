const urlName = 'https://pokeapi.co/api/v2/pokemon?limit=1154&offset=0' // Total de Pokemons disponíveis 1154
const urlType = 'https://pokeapi.co/api/v2/type/'
const pokemon = []

async function getPokemonName(){
    await fetch(urlName)
    .then((response) => response.json())
    .then((response) => {
        for(let i of response.results){
            pokemon.push(i.name)
        }

        localStorage.setItem('pokemon', pokemon)
    })
}

getPokemonName();


const types = []
async function getPokemonType(){
    await fetch(urlType)
    .then((response) => response.json())
    .then((response) => {
        for(let i of response.results){
            types.push(i.name)
        }

        localStorage.setItem('types', types)
    })
}

getPokemonType()