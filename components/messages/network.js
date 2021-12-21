const express = require('express'); 
const responses = require('../../network/responses');
const controller = require('./controller')
const router = express.Router();

// Componente de envío de mensajes 'messages'

// Caso get
router.get('/', function(req, res) {
    controller.getMessages()
    .then((messageList) => {
        responses.success(req, res, messageList , 200);
    })
    .catch(e => {
        console.log(e);
        responses.error(req, res, 'Error de GET' , 500);
    })
});

// Caso post
router.post('/', function(req, res) {
    controller.addMessage(req.body.user, req.body.message)
    .then(() => {
        responses.success(req, res, 'Mensaje enviado con exito' , 200);
    })
    .catch(e => {
        responses.error(req, res, "Error de POST : " + e , 400);
    })
    
})

// Exportamos el router al server
module.exports = router;