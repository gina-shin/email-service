const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

const { config } = require('./config')
const registerRoutes = require('./routes/emailRoutes')
const { authorize } = require('./middlewares/authorization')

app.use(bodyParser.json())
app.use(authorize(config.secretKey))
app.use('/', registerRoutes.emailRoutes(express.Router(), config))

app.listen(port, () => console.log(`Email service listening at http://localhost:${port}`))