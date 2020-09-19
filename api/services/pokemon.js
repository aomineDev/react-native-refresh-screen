const mongoose = require('mongoose')

const PokemonSchema = require('../utils/schemas/pokemon')

class PokemonService {
  constructor () {
    this.Pokemon = mongoose.model('pokemons', PokemonSchema)
  }

  async getPokemon () {
    const pokemon = await this.Pokemon.find({})

    return pokemon
  }

  async createPokemon ({ pokemon }) {
    const createdPokemon = new this.Pokemon(pokemon)
    await createdPokemon.save()

    return createdPokemon
  }
}

module.exports = PokemonService
