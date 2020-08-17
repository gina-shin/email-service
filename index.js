function runEmailApi(config) {

  const express = require('express')
  const app = express()
  const bodyParser = require('body-parser')

  // const { config } = require('./config')
  const registerRoutes = require('./routes/emailRoutes')
  const { authorize } = require('./middlewares/authorization')

  app.use(bodyParser.json())
  app.use(authorize(config.secretKey))
  app.use('/', registerRoutes.emailRoutes(express.Router(), config))

  app.listen(config.port, () => console.log(`Email service listening at http://localhost:${config.port}`))

}

module.exports = {
  runEmailApi,
}