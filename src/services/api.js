const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'

function getPokemon(){
    fetch(url)
        .then((response) => response.json())
        .then(response => console.log(response.results))
}

getPokemon()