const list = [];        // Lista de mensajes

function addMessage(message){
    list.push(message);
}

function getMessages(){
    return list;
}

// Exportamos las funciones del almacenamiento
module.exports = {
    add: addMessage,
    list: getMessages
    // get:
    // delete:
}