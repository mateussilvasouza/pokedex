const url = 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0'
const pokemon = [];

const listPokemons = document.get

async function getPokemonName(){
    await fetch(url)
    .then((response) => response.json())
    .then((response) => {
        for(let i of response.results){
            pokemon.push(i.name)
        }

        localStorage.setItem('pokemon', pokemon)
    })
}

getPokemonName();