const mongoose= require('mongoose');
const user= new mongoose.Schema({
    
    'firstName':{type:String, required:true},
    'lastName':{type:String},
    'age':{type:Number, required:true, min:1, max:150},
    'email':{type:String, required:true, unique:true},
    'profileImages':[{type:Buffer}],
    // 'PhoneNo':{type:Number, required:true},
    'timestamps':{type:Date}
})
module.exports= mongoose.model('user',user);