const mongoose= require('mongoose');
const user= new mongoose.Schema({
    
    'firstName':{type:String, required:true, min:3, max:30},
    'lastName':{type:String, min:3, max:3},
    'age':{type:Number, required:true, min:1, max:150},
    'email':{type:String, required:true, unique:true},
    'profileImages':[{type:Buffer}],
    // 'PhoneNo':{type:Number, required:true},
    'timestamps':{type:Date}
})
module.exports= mongoose.model('user',user);