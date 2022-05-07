const mongoose =require('mongoose');

class Mongo{
    constructor(){
        this.createMongoConnection();
    }
    createMongoConnection(){
        // mongoose.connect(`mongodb+srv://ambeshom:1234@cluster0.txnlt.mongodb.net/Masai?retryWrites=true&w=majority`);
        mongoose.connect(`mongodb://localhost:27017/unit6`)
        mongoose.connection.once('open',()=>{
            console.log('connected to the database');
        })
        mongoose.connection.on('error',()=>{
            console.log("couldn't connect to the database");
        })
    }
}
module.exports =Mongo;