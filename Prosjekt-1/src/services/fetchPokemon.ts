
const fetchPokemon = (pokemonName: number ) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((res) =>
    res.json()
  );
};


export default fetchPokemon;
