import service from './index'

class PokemonService {
  constructor () {
    this.collection = 'pokemon'
  }

  async getPokemon () {
    const response = await service.getAll({ collection: this.collection })
    const pokemon = await response.json()

    return pokemon
  }
}

export default PokemonService
