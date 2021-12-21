const express = require('express');             // Express
const bodyParser = require('body-parser');      // Parser del body y querys
const routes = require('./network/routes');     // Router de ruta
const db = require('./db');                     // Conexion a base de datos remota

// URL 
var uri = "mongodb://db_user:Lf5nu4QmTtUkUtc6@cluster0-shard-00-00.ni0u5.mongodb.net:27017,cluster0-shard-00-01.ni0u5.mongodb.net:27017,cluster0-shard-00-02.ni0u5.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-xgqdjy-shard-0&authSource=admin&retryWrites=true&w=majority";
db(uri);

var app = express();
app.use(bodyParser.json());
routes(app);

app.listen(3000);
console.log('Aplicación activa en http://localhost:3000');