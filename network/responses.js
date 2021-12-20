// Mensaje de éxito de conexión 
exports.success = function(req, res, msj, status){
    res.status(status || 200).send({
        error: '',
        body: msj
    });
}

// Mensaje de error de conexión
exports.error = function(req, res, msj, status){
    res.status(status || 200).send({
        error: msj,
        body: ''
    });
}