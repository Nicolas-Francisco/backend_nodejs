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

function getMessages(filterUser){
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    });
}

function updateMessage(id, message){
    return new Promise(async (resolve, reject) => {
        if (!id || !message){
            console.error('ID o mensaje invalido')
            reject('Datos incorrectos');
            return false;
        }

        const resp = await store.update(id, message);
        resolve(resp);
    });
}

function deleteMessage(id){
    return new Promise(async (resolve, reject) => {
        if (!id){
            console.error('ID invalido')
            reject('Datos incorrectos');
            return false;
        }

        store.delete(id)
            .then(() => {
                resolve();
            })
            .catch(e => {
                reject(e);
            });
    });
}

// Exportamos las funciones del controller
module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
}