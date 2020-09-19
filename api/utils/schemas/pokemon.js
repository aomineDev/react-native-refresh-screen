const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PokemonSchema = new Schema({
  name: String,
  sprite: String,
  types: [String],
  number: Number,
  date: {
    type: Date,
    default: new Date()
  }
})

module.exports = PokemonSchema
