const emailCheck=require("../utils/emailCheck");
const passwordCheck =require("../utils/passwordCheck");

const signUpValidate=(req, res,next)=>{
    const {fname,lname,email,password,cpassword}=req.body;
    console.log(fname,lname,email,password,cpassword)

    if(typeof fname==="string" &&
    typeof lname==="string" &&
    emailCheck(email)&&
    !passwordCheck(password)&&
    !passwordCheck(cpassword)&&
    password===cpassword
    ){
        next()
    }else{
        console.log(typeof fname==="string")
        console.log(typeof lname==="string")
        console.log(emailCheck(email))
        console.log(passwordCheck(password))
        console.log(passwordCheck(cpassword))
        console.log(password===cpassword)
         res.status(401).send("Please check the input you are sending")
    }
    


}

module.exports = signUpValidate