const User = require("../models/user")
var jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt');

const signIn=async (req, res)=>{
    var bcrypt = require('bcrypt');
    const {email,password}=req.body 
    const response=await User.findOne({where:{email}})
    try{
         if(bcrypt.compare(password, response.password)){
             console.log("AKSSH")
             var token = jwt.sign({ email }, 'shhhhh');
             res.status(200).send({
                 status:"logged in",
                 data:token
             })
         }
        else{
          res.status(400).send({
              status:"error",
              message:"User not resgistered,Please register it first"
          })
        }

    }catch{
       res.status(400).send({
              status:"error",
              message:"Something occured"
          })
    }

}

module.exports=signIn