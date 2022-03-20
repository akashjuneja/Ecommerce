const descriptionCheck=require("../utils/productsCheck")

const productValidate=(req,res,next)=>{
    if(descriptionCheck()===true){
        next()
    }else{
        res.status(400).send({
            message:"description should be greater than 10 characters",

        })
    }
}

module.exports=productValidate