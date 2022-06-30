const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
const pokemon = [];
async function getPokemon(){
    await fetch(url)
    .then((response) => response.json())
    .then((response) => {
        for(let i of response.results){
            pokemon.push(i.name)
        }

        console.log(pokemon)
    })
}

getPokemon();
