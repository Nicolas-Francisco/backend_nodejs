const store = require('./store');

function getUsers(){
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
}

function addUser(name){
    return new Promise((resolve, reject) => {
        if (!name){
            return Promise.reject('Invalid Name');
        }

        const user = {
            name: name
        }

        return store.add(user);
    });
}


// Exportamos las funciones del controller
module.exports = {
    addUser,
    getUsers,
    // updateUser,
    // deleteUser,
}