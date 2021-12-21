const db = require('mongoose');
const Model = require('./model');

// Conexion con base de datos
const MongoClient = require('mongodb').MongoClient;

// URL y conexión directa
var uri = "mongodb://db_user:Lf5nu4QmTtUkUtc6@cluster0-shard-00-00.ni0u5.mongodb.net:27017,cluster0-shard-00-01.ni0u5.mongodb.net:27017,cluster0-shard-00-02.ni0u5.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-xgqdjy-shard-0&authSource=admin&retryWrites=true&w=majority";
MongoClient.connect(uri, function(err, client) {
    const collection = client.db("test").collection("devices");
    client.close();
});

db.Promise = global.Promise;
db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'nodejs_db' })
    .then(() => console.log('[db] Conectada con éxito'))
    .catch(err => console.error('[db]', err));


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
