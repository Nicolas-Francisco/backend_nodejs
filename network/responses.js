exports.success = function(req, res, msj, status){
    res.status(status || 200).send({
        error: '',
        body: msj
    });
}

exports.error = function(req, res, msj, status){
    res.status(status || 200).send({
        error: msj,
        body: ''
    });
}