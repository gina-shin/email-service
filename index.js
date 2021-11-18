const express = require('express');
const bodyParser = require('body-parser');
const registerRoutes = require('./routes/emailRoutes');
const { authorize } = require('./middlewares/authorization');

function runEmailApi(config) {
  const app = express();

  app.use(bodyParser.json());
  app.use(authorize(config.secretKey));
  app.use('/', registerRoutes.emailRoutes(express.Router(), config));

  // eslint-disable-next-line no-console
  app.listen(config.port, () => console.log(`Email service listening at http://localhost:${config.port}`));
}

module.exports = {
  runEmailApi,
};
