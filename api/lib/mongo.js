const mongoose = require('mongoose')

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}

function connect () {
  mongoose.connect('mongodb+srv://db_user_aomine:OFLKQPs4mkQb8ZB8@cluster0.ilra5.mongodb.net/pokedex', options)
    .then(() => {
      console.log('[mongo] mongo connected succesfuly')
    })
    .catch(err => {
      console.error('[mongo] ' + err.message)
    })
}

module.exports = connect
