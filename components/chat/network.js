const express = require('express'); 
const responses = require('../../network/responses');
const controller = require('./controller')
const router = express.Router();

// Componente de chat 'chat'

// Caso get
router.get('/:userId', function(req, res) {
    controller.getChats(req.params.userId)
    .then((users) => {
        responses.success(req, res, users , 200);
    })
    .catch(e => {
        console.log(e);
        responses.error(req, res, '[Error de GET] : ' + e , 500);
    })
});

// Caso post
router.post('/', function(req, res) {
    controller.addChat(req.body.users)
    .then((data) => {
        responses.success(req, res, data , 200);
    })
    .catch(e => {
        console.log(e);
        responses.error(req, res, '[Error de POST] : ' + e , 500);
    })
});


// // Exportamos el router al server
module.exports = router;