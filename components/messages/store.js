const db = require('mongoose');
const Model = require('./model');

// Conexion con base de datos
const MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://db_user:Lf5nu4QmTtUkUtc6@cluster0-shard-00-00.ni0u5.mongodb.net:27017,cluster0-shard-00-01.ni0u5.mongodb.net:27017,cluster0-shard-00-02.ni0u5.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-xgqdjy-shard-0&authSource=admin&retryWrites=true&w=majority";
MongoClient.connect(uri, function(err, client) {
  const collection = client.db("test").collection("devices");
  client.close();
});

db.Promise = global.Promise;

db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'nodejs_db' })
  .then(() => console.log('[db] Conectada con éxito'))
  .catch(err => console.error('[db]', err));

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages() {
  const messages = await Model.find();
  return messages;
}


// Exportamos las funciones del almacenamiento
module.exports = {
    add: addMessage,
    list: getMessages
    // get:
    // delete:
}
