const express = require('express'); 
const responses = require('../../network/responses');
const controller = require('./controller')
const router = express.Router();

// Componente de envío de mensajes 'messages'

// Caso get
router.get('/', function(req, res) {
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages)
    .then((messageList) => {
        responses.success(req, res, messageList , 200);
    })
    .catch(e => {
        console.log(e);
        responses.error(req, res, '[Error de GET] : ' + e , 500);
    })
});

// Caso post
router.post('/', function(req, res) {
    controller.addMessage(req.body.user, req.body.message)
    .then(() => {
        responses.success(req, res, 'Mensaje enviado con exito' , 200);
    })
    .catch(e => {
        responses.error(req, res, "[Error de POST] : " + e , 400);
    })
    
})

// Caso patch
router.patch('/:id', function(req, res) {
    controller.updateMessage(req.params.id, req.body.message)
    .then(() => {
        responses.success(req, res, 'Mensaje actualizado con exito' , 200);
    })
    .catch(e => {
        responses.error(req, res, "[Error de PATCH] : " + e , 400);
    })
})

// Caso delete
router.delete('/:id', function(req, res) {
    controller.deleteMessage(req.params.id)
    .then(() => {
        responses.success(req, res, 'Mensaje eliminado con exito' , 200);
    })
    .catch(e => {
        responses.error(req, res, "[Error de DELETE] : " + e , 400);
    })
})

// Exportamos el router al server
module.exports = router;