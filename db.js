const db = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

// Conexion con base de datos
async function connect(uri){
    MongoClient.connect(uri, function(err, client) {
        const collection = client.db("test").collection("devices");
        client.close();
    });
    
    db.Promise = global.Promise;
    await db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'nodejs_db' })
        .then(() => console.log('[db] Conectada con éxito'))
        .catch(err => console.error('[db]', err));
}

module.exports = connect;