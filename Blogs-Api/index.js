const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const routes = require('./routes/routes');
require('./models/index');

const app = express();
app.use(bodyParser.json());

app.use(routes);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.get('/', (request, response) => {
  response.send();
});
