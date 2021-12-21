const Model = require('./model');

// Funciones sobre la base de datos remota
// Funcion addMessage -> añade un nuevo mensaje a la BBDD
function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

// Funcion getMessages -> retorna todos los mensajes con o sin filtro
function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if(filterUser != null){
            filter = {user: filterUser};
        } 
        
        // Resolvemos el user que hace referencia al id del
        // componente user.
        Model.find(filter)
            .populate('user')
            .exec((error, populated) => {
                if (error){
                    reject(error);
                    return false;
                }

                resolve(populated);
            })
    });
}

// Funcion updateMessage -> actualiza un mensaje en la BBDD
async function updateMessage(id, message) {
    const id_message = await Model.findOne({
        _id: id
    });
    id_message.message = message;
    const newMsj = await id_message.save();
    return newMsj;
}

// Funcion deleteMessage -> elimina un mensaje en la BBDD
async function deleteMessage(id){
    return Model.deleteOne({
        _id: id
    });
}

// Exportamos las funciones del almacenamiento
module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateMessage,
    delete: deleteMessage,
}
