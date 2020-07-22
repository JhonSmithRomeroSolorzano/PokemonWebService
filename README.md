# PokemonWebService

Its web service on NodeJS working with https://pokeapi.co/docs/v2#pokemon

You can search pokemon by id, doing request GET to https://server:3000/id/{id} (With every request, the Pokemon is saved in local storage for the next function)
And also you cal search pokemon by name, doing request GET to https://server:3000/name/{name} (This requist doesnt work whit the API, just with local storage)

