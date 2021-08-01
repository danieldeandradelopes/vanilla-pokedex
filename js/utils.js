import api from './services/apiPokemon.js';

function generatePokemonTemplate(pokemon) {
  const template = `
    <div class="card-pokemon">
      <img id="image-${pokemon.name}" alt="Pokemon Picture" />
      <h3 id="title-${pokemon.name}"></h3>
      <strong id="type-${pokemon.type}"><strong>
    </div>
    `;

  return template;
}

function populatePokemons() {
  const container = document.querySelector('.container');

  api.get('/pokemon')
    .then((response) => {
      const pokemons = response.data;

      for (const pokemon of pokemons) {
        container.innerHTML = container.innerHTML + generatePokemonTemplate(pokemon);

        document.querySelector(`#image-${pokemon.name}`).src = pokemon.image;
        document.querySelector(`#title-${pokemon.name}`).innerHTML = pokemon.name;
        document.querySelector(`#type-${pokemon.type}`).innerHTML = pokemon.type;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}


export { populatePokemons }