const store = require('./store');

function getChats(userId){
    return store.list(userId);
}

function addChat(users){
    if (!users || !Array.isArray(users)){
        return Promise.reject('Invalid User List');
    }

    const chat = {
        users: users
    }

    return store.add(chat);
}


// Exportamos las funciones del controller
module.exports = {
    addChat,
    getChats,
    // updateUser,
    // deleteUser,
}