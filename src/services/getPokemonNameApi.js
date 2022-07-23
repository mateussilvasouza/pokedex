const urlName = 'https://pokeapi.co/api/v2/pokemon?limit=154&offset=0' // Total de Pokemons disponíveis 1154
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


