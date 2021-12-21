const Model = require('./model');

// Funciones sobre la base de datos remota

// Funcion getUser -> retorna todos los usuarios con o sin filtro
async function getUser() {
    const users = await Model.find();
    return users;
}

// Funcion addUser -> añade un nuevo usuario a la BBDD
function addUser(user) {
    const myUser = new Model(user);
    return myUser.save();
}


// Exportamos las funciones del almacenamiento
module.exports = {
    add: addUser,
    list: getUser,
    // update: updateUser,
    // delete: deleteUser,
}
