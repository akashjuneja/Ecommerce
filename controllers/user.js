const User = require("../models/user")
const {Op} =require('sequelize')

const getFullSearchUser= async (req, res)=>{
    try{
   const query=req.query;
   const user=await User.findAll({
       where:{
           name:{
               [Op.eq]:query.q
           }
       }
   })

   return res.status(200).json({
       "name":user.fname,
       "email":user.email
   })

    }catch(err){
      console.log(err)
      res.status(500).send({
          status:"error",
          message:err
      })
    }
   

}

module.exports=getFullSearchUser