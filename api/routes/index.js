const pokemonRoute = require('./pokemon')

function router (server) {
  server.use('/api/pokemon', pokemonRoute)
}

module.exports = router
