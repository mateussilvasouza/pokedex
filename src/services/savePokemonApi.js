function savePokemon(){
    pokemon.forEach(value => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then((response) => response.json())
        .then((response) => localStorage.setItem(value,  JSON.stringify(response)))
        }
    )
}

savePokemon()