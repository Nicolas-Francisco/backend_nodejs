const express = require('express');
const message = require("../components/messages/network");
const user = require("../components/user/network");

// Servidor de rutas, que añade las rutas necesarias
// con sus servidores respectivos

const routes = function(server){
    server.use("/msj", message);
    // en localhost:3000/msj ... estará el componente message

    server.use("/user", user);
}

// Exportamos las rutas al server
module.exports = routes;