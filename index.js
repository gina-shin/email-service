const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

const { config } = require('./config')
const registerRoutes = require('./routes/emailRoutes')

app.use(bodyParser.json())
app.use((req, res, next) => {
  if(req.headers.authorization !== config.secretKey) {
    res.status(403)
    .json({
      status: 403,
      message: 'Invalid credentials.'
    })
  }
  else {
    next()
  }
})
app.use('/', registerRoutes.emailRoutes(express.Router(), config))

app.listen(port, () => console.log(`Email service listening at http://localhost:${port}`))