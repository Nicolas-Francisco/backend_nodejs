const express = require('express');             // Express
const bodyParser = require('body-parser');      // Parser del body y querys
const routes = require('./network/routes');     // Router de rutas

var app = express();
app.use(bodyParser.json());
routes(app);

app.listen(3000);
console.log('Aplicación activa en http://localhost:3000');