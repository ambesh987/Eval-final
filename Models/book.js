const mongoose= require('mongoose');
const book= new mongoose.Schema({
    
    'likes':{type:Number, default:0, minlength:0},
    'coverImage':{type:String, required:true},
    'content':{type:String, required:true},
    'timestamps':{type:Date},
    userId:{type:mongoose.Types.ObjectId, ref:"user"},
    publicationId:{type:mongoose.Types.ObjectId, ref:"publication"}

})
module.exports= mongoose.model('book',book);