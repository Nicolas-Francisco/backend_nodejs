const { Router } = require('express');
const bodyParser = require('body-parser');
const express = require('express'); 
const responses = require('./network/responses'); 

const router = express.Router();
var app = express();
app.use(router);
app.use(bodyParser.json());

// app.use('/', function(req, resp) {
//     resp.send('Hola Mundo');
// })

router.get('/', function(req, res) {
    if (req.query.name){
        console.log(req.query.name);
        responses.success(req, res, 'Hola, ' + req.query.name , 200);
    } else {
        console.log('No one is here!')
        responses.error(req, res, 'ups' , 400);
    }
})

app.listen(3000);
console.log('Aplicación activa en http://localhost:3000');