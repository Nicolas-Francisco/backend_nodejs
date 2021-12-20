function addMessage(user, message){
    return new Promise((resolve, reject) => {
        if (!user || !message){
            console.error('Mensaje inválido')
            reject('Mensaje inválido');
            return false;
        }

        const fullMsj = {
            user: user,
            message: message,
            date: new Date(),
        }

        console.log(fullMsj);
        resolve(fullMsj);
    })
}

module.exports = {
    addMessage,
}