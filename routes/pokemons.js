const express = require("express");
const router = express.Router();
const {
  getPokemonByName,
  getPokemonByID,
} = require("../controllers/pokemonController.js");
//const { getPokemonById } = require("../controllers/pokemonController.js");

router.route("/id/:id").get(getPokemonByID);
router.route("/name/:name").get(getPokemonByName);

module.exports = router;
