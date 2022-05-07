const userModel=require("../Models/users");

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
module.exports={Register}