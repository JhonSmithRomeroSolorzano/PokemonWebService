const express = require("express");
const app = express();
const pokemonRoutes = require("./routes/pokemons");

//settings

//middleware

//routes

app.use("/pokemon", pokemonRoutes);

//static files

//start server
app.listen(3000, () => {
  console.log("Server on port 3000");
});
