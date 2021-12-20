const db = require('mongoose');

// Conexion con base de datos
// mongodb+srv://db_user:Lf5nu4QmTtUkUtc6@cluster0.ni0u5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://db_user:Lf5nu4QmTtUkUtc6@cluster0.ni0u5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    console.log("Conectado a BBDD")
    client.close();
});


function addMessage(message){
    client.connect(err => {
        const collection = client.db("test").collection("devices");

        console.log("Conectado a BBDD")
        const myMsj = new db.Model(message);
        myMsj.save();

        client.close();
    });
}

function getMessages(){
    client.connect(err => {
        const collection = client.db("test").collection("devices");

        console.log("Conectado a BBDD")
        const messages = db.Model.find();

        client.close();
        return messages;
    });
}

// Exportamos las funciones del almacenamiento
module.exports = {
    add: addMessage,
    list: getMessages
    // get:
    // delete:
}
