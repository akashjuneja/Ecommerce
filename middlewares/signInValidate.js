
const emailCheck = require("../utils/emailCheck")
const passwordCheck = require("../utils/passwordCheck")


const signInValidate=(req,res,next)=>{
    const {email,password}=req.body
    if(emailCheck(email) && !passwordCheck(password)){
        next()
    }else{
        res.status(401).send({
            status:"error",
            message:"Please check your credentials"
        })
    }
}
module.exports=signInValidate