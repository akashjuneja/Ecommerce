const orderCheck=(req,res,next)=>{
    const {id,pname,price,qty,discount,category}=req.body;

    if(qty==0){
        res.status(400).send({
            status:"info_Error",
            message:"Please specify atleast 1 qty"
        })
    }

    if(typeof(id)==="NUMBER"
    // && typeof(pname)==="STRING"
    // && typeof(price)==="STRING"
    // && typeof(qty)=="NUMBER"
    // && typeof(category)=="STRING"
    // && typeof(discount)=="NUMBER"
    ){
        next()
    }else{
        res.status(400).send({
            status:"Error1",
            message:"Something Occured"
        })
    }
}

module.exports=orderCheck;
