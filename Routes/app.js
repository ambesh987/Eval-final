const express= require('express');
const app= express();
const multer =require('multer');
// const bodyParser= require('body-parser');
const userControllers= require('../Controllers/userControllers');


app.use(express.json());
// app.post('/user',userControllers.user);
const diskStorage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,`${__dirname}/images`)
    },
    filename:function(req,file,cb){
        let extension=file.mimetype.split("/")[1];
        cb(null,`admin-${file.fieldname}-${Date.now()}.${extension}`);
    }
})
const upload=multer({
    storage:diskStorage
})
app.use(express.json());
app.post("/user",upload.array("profilePic",5),userControllers.Register);
app.post("/book",upload.single("coverImage"),userControllers.CreateBook);

app.post("/comments",userControllers.Comments);
app.post("/login", userControllers.Login);
app.post("/user/books",middlewares.isValidToken, userControllers.GetAllBooks);
module.exports=app;