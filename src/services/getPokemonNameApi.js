const urlName = 'https://pokeapi.co/api/v2/pokemon?limit=105&offset=0' // Total de Pokemons disponíveis 1154
const urlType = 'https://pokeapi.co/api/v2/type/'
const urlRegion = 'https://pokeapi.co/api/v2/region/'
const pokemon = []

async function getPokemonURL(){
    await fetch(urlName)
    .then((response) => response.json())
    .then((response) => {
        for(let i of response.results){
           pokemon.push(i.name)
        }
        localStorage.setItem('pokemon', JSON.stringify(pokemon))
    })
}

async function getPokemon({url}){
    await fetch(url)
   .then(response => response.json())
   .then(response => pokemon.push(response))
}

getPokemonURL();



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

const regions = []
async function getPokemonRegions(){
    await fetch(urlRegion)
    .then((response) => response.json())
    .then((response) => {
        for(let i of response.results){
            regions.push(i.name)
        }

        localStorage.setItem('regions', regions)
    })
}

getPokemonRegions()