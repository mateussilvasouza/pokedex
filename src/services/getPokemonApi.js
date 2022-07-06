const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
const pokemon = [];

const listPokemons = document.get

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

localStorage.setItem('pokemon', JSON.stringify(pokemon))
{/* <div class="card">
<div class="card__info">
    <p class="info__name">Pikachu</p>
    <div class="info__stats">
        <div class="stats_attack">
            <div class="stats">100</div>
            <p class="stats__text">Attack</p>
        </div>
        <div class="stats_defense">
            <div class="stats">100</div>
            <p class="stats__text">Defense</p>
        </div>
    </div>
    <div class="card__types">
        <p>type</p>
        <p>type</p>
    </div>
</div>
<div class="card__image">
    <img src="" alt="">
</div>
</div>
 */}
