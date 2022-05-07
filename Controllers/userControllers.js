const userModel=require("../Models/users");
const bookModel = require("../Models/book");
const CommentModel = require("../Models/comment");
const jwtService = require("../CommonLib/jwtToken")
const { default: mongoose } = require("mongoose");
const middlewares = require("../Middlewares/Validators")

async function Register(req,res){
    try{
   let files=req.files;
   console.log(files);
   let pictures=[];
   for(let i=0;i<files.length;i++){
       pictures.push(files[i].path);
   }

   let detail=req.body;
   detail.timestamps=new Date();
   detail.profileImages=[pictures];



   let result= await userModel.insertMany([detail]);
   console.log(result);
   res.status(200).json({
       status:"Success",
       user:result,
   })
}
catch(error){
    res.status(400).json({
        error:error
    })
}

}

async function CreateBook(req,res){
    try {
        let path=req.file.path;
        let detail=req.body;
        let userId=req.headers.userId;
        detail.timestamps=new Date();
        detail.coverImage=path;
        detail.userId=mongoose.Types.Objectid(userId);
        let res=await bookModel.insertMany([detail]);
        console.log(res);
        res.status(200).json({
           status:"success",
           user:res,
        })

    } catch (error) {
        res.status(400).json({
            error:error
        })
        
    }
}
async function Comments(req,res){
    try {
      let details = req.body;
      let userId = req.headers.userId;
      let bookId = req.headers.bookId;
      details.userId = mongoose.Types.ObjectId(userId);
      details.bookId = mongoose.Types.ObjectId(bookId);
      let result = await CommentModel.insertMany([details]);
      console.log(result);
      res.status(200).json({
        status: "Success",
        Result: result
      })
    } catch (error) {
      res.status(400).json({
        Error : error
      })
    }
  }
  async function Login(req,res,next){
    let details = req.body;
    let userDetail = await userModel.findOne({email:details.email});
    if(userDetail){
      let token = jwtService.generateToken(details);
      res.json({
       status: "Login Successful",
       token: token
      })
    }else{
      res.status(200).json({
        status: "Failed",
        message: "You are not registered with us"
      });
    }
  }

  async function GetAllBooks(req,res,next){

  }
module.exports={Register, CreateBook, Comments, Login, GetAllBooks}