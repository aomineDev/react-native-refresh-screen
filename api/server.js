const express = require('express')

const mongoConnect = require('./lib/mongo')
const routes = require('./routes')

const app = express()

// Body parser
app.use(express.json())

// Routes
routes(app)

// Mongo connection
mongoConnect()

app.listen(3000, err => {
  if (err) console.error('[err] ' + err.message)

  console.log('[serv] app listening in http://localhost:3000')
})
