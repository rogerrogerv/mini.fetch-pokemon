(() => {
  class Pokemonager {
    
    async findNames(n) {
      let response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${n}`);
      return response.data.results.map(pokemon => pokemon.name)
    }

    findUnderWeight(weight) {
      let promises = [];
      for (let i = 1; i <= 10; i++) {
        promises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`))
      }

      return Promise.all(promises)
        .then(pokemonObjects =>  pokemonObjects.filter(pokemon => pokemon.data.weight < weight))
        .then(filteredPokemons => filteredPokemons.map(pokemon => pokemon.data))
        .catch((err) => console.log(err));
    }
  }
  window.Pokemonager = Pokemonager;
})();
