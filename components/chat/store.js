const Model = require('./model');

// Funciones sobre la base de datos remota

// Funcion getChat -> retorna todos los chats
async function getChats(userId) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if(userId){
            filter = {users: userId};
        } 
        
        Model.find(filter)
            .populate('users')
            .exec((error, populated) => {
                if (error){
                    reject(error);
                    return false;
                }

                resolve(populated);
            })
    });
}

// Funcion addChat -> añade un nuevo chat
function addChat(chat) {
    const myChat = new Model(chat);
    return myChat.save();
}


// Exportamos las funciones del almacenamiento
module.exports = {
    add: addChat,
    list: getChats,
    // update: updateUser,
    // delete: deleteUser,
}
