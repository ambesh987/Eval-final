const mongoose= require('mongoose');
const user= new mongoose.Schema({
    
    'firstName':{type:String, required:true, minlength:3, maxlength:30},
    'lastName':{type:String, minlength:3, maxlength:3},
    'age':{type:Number, required:true, minlength:1, maxlength:150},
    'email':{type:String, required:true, unique:true},
    'profileImages':[{type:Buffer}],
    // 'PhoneNo':{type:Number, required:true},
    'timestamps':{type:Date}
})
module.exports= mongoose.model('user',user);