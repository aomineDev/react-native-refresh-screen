const router = require('express').Router()

const PokemonService = require('../services/pokemon')

const pokemonService = new PokemonService()

router.get('/', async (req, res) => {
  const pokemons = await pokemonService.getPokemon()

  res.status(200).json({
    data: pokemons,
    message: 'pokemons listed'
  })
})

router.post('/', async (req, res) => {
  const { body: pokemon } = req

  const createdPokemon = await pokemonService.createPokemon({ pokemon })

  res.status(201).json({
    data: createdPokemon,
    message: 'pokemon created'
  })
})

module.exports = router
