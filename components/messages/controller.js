const store = require('./store');

function addMessage(user, message){
    return new Promise((resolve, reject) => {
        if (!user || !message){
            console.error('Usuario o mensaje invalido')
            reject('Datos incorrectos');
            return false;
        }

        const fullMsj = {
            user: user,
            message: message,
            date: new Date(),
        }

        store.add(fullMsj);
        resolve(fullMsj);
    });
}

function getMessages(){
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
}

// Exportamos las funciones del controller
module.exports = {
    addMessage,
    getMessages,
}