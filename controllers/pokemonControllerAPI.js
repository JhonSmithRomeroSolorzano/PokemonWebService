const fetch = require("node-fetch");

class pokemonControllerAPI {
  async getForID(id) {
    //API request for ID
    const URI = " https://pokeapi.co/api/v2/pokemon/" + id;
    try {
      const response = await fetch(URI);
      if (response.status == 404) {
        return null;
      } else {
        //Working with the request
        const data = await response.json();
        var stats = data.stats;
        var arrayStats = [];
        stats.forEach((element) => {
          arrayStats.push(element.stat.name + "=" + element.base_stat);
        });
        var arrayEvolutios = await this.getEvolutions(data.id);
        var pokemon = {
          name: data.forms[0].name,
          height: data.height,
          weight: data.weight,
          id: data.id,
          stats: arrayStats,
          evolutios: arrayEvolutios,
        };
        //console.log(pokemon);
        return pokemon;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async getEvolutions(id) {
    try {
      const URI = "https://pokeapi.co/api/v2/evolution-chain/" + id;
      //console.log(URI);
      const response = await fetch(URI);
      const data = await response.json();
      this.temporalChane = data.chain;
      var evolutionsArray = [];
      do {
        evolutionsArray.push(this.temporalChane.species.name);
      } while (this.comprobationEvolution());

      return evolutionsArray;
    } catch (error) {
      console.log(error);
    }
  }
  comprobationEvolution() {
    if (this.temporalChane.evolves_to != "") {
      this.temporalChane = this.temporalChane.evolves_to[0];
      return true;
    } else {
      return false;
    }
  }
}
const pokemonControllerAPIObject = new pokemonControllerAPI();
module.exports = pokemonControllerAPIObject;
