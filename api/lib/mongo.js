const mongoose = require('mongoose')
const config = require('../config')

const { mongo } = config

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}

function connect () {
  mongoose.connect(`mongodb+srv://${mongo.user}:${mongo.password}@${mongo.host}/${mongo.database}`, options)
    .then(() => {
      console.log('[mongo] mongo connected succesfuly')
    })
    .catch(err => {
      console.error('[mongo] ' + err.message)
    })
}

module.exports = connect
