const express = require('express'); 
const responses = require('../../network/responses');
const controller = require('./controller')
const router = express.Router();

// Componente de usuarios 'user'

// Caso get
router.get('/', function(req, res) {
    controller.getUsers()
    .then((userList) => {
        responses.success(req, res, userList , 200);
    })
    .catch(e => {
        console.log(e);
        responses.error(req, res, '[Error de GET] : ' + e , 500);
    })
});

// Caso post
router.post('/', function(req, res) {
    controller.addUser(req.body.name)
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