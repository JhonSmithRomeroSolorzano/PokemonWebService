const { pokemons } = require("../models/pokemonModel.json");
const { get } = require("../routes/pokemons");
const pokemonControllerApi = require("../controllers/pokemonControllerAPI");

module.exports = {
  getPokemonByID: async (req, res) => {
    const { id } = req.params;
    const pokemon = await pokemonControllerApi.getForID(id);
    if (pokemon != null) {
      pokemons.push(pokemon);
      res.json(pokemon);
    } else {
      res.status(404).json({ message: "Pokemon doesn´t exist" });
    }
  },
  getPokemonByName: (req, res) => {
    const { name } = req.params;
    const pokemonSelected = [];
    pokemons.forEach((pokemon) => {
      if (pokemon.name == name) {
        pokemonSelected.push(pokemon);
      }
    });
    if (pokemonSelected != "") {
      res.json(pokemonSelected);
    } else {
      res.status(404).json({ message: "Pokemon doesn´t exist" });
    }
  },
};
