const express = require('express'); 
const responses = require('../../network/responses');
const controller = require('./controller')

const router = express.Router();

// Componente de envío de mensajes 'messages'

// Caso get
router.get('/', function(req, res) {
    // Si recibe un nombre, le saluda y arroja status 200
    if (req.query.name){
        console.log(req.query.name);
        responses.success(req, res, 'Hola, ' + req.query.name , 200);
    } else { // Si no hay un nombre en la query, error
        console.log('No one is here!')
        responses.error(req, res, 'ups' , 400);
    }
})

router.post('/', function(req, res) {
    controller.addMessage(req.body.user, req.body.message)
    .then(() => {
        responses.success(req, res, 'Mensaje enviado con exito' , 200);
    })
    .catch(() => {
        responses.error(req, res, 'Información inválida' , 400);
    })
    
})

// Exportamos el router al server
module.exports = router;