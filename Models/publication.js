const mongoose= require('mongoose');
const publication= new mongoose.Schema({
    
    'name':{type:String, required:true},
    
    'timestamps':{type:Date, required:true}
})
module.exports= mongoose.model('publication',publication);