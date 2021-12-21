const Model = require('./model');

// Funciones sobre la base de datos remota
// Funcion addMessage -> añade un nuevo mensaje a la BBDD
function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

// Funcion getMessages -> retorna todos los mensajes con o sin filtro
async function getMessages(filterUser) {
    let filter = {};
    if(filterUser != null){
        filter = {user: filterUser};
    } 
    const messages = await Model.find(filter);
    return messages;
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
