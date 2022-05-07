const mongoose= require('mongoose');
const comment= new mongoose.Schema({
    
    'body':{type:String, required:true},
    
    'timestamps':{type:Date},
    userId:{type:mongoose.Types.ObjectId, ref:"user"},
    bookId:{type:mongoose.Types.ObjectId,ref:"book"}
})
module.exports= mongoose.model('comment',comment);