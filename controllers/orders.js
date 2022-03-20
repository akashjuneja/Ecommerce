const Orders = require("../models/orders");



const saveOrder=async (req,res)=>{
    try{
     const {id,pname,price,qty,discount,category}=req.body;
     let deliveryCharge=45;
     let amount=0;
     let charge=0;
     let mult=0;
     if(category==="COD"){
        amount=qty*price;
        if(discount){
           discount=discount/100;
            mult=amount*discount;
           amount=amount-mult;
           amount=amount+deliveryCharge
           charge=deliveryCharge
        }else{
           amount=amount+deliveryCharge
           charge=deliveryCharge
        }
     }else{
      deliveryCharge=45-15;
        if(discount){
           let discount=discount/100;
           let mult=amount*discount;
           amount=amount-mult;
           amount=amount+deliveryCharge
           charge=deliveryCharge
        }else{
           amount=amount+deliveryCharge
           charge=deliveryCharge
        }

     }

    let newOrder=new Orders({
        id:id,
        pname:pname,
        price:price,
        qty:qty,
        amount:amount,
        charge:charge,
        discount:discount,
        category:category
    })

    let savedOrder= await newOrder.save()
    console.log(savedOrder)
            return res.status(200).send({
                savedOrder
            })

}catch(err){
    return res.status(500).send({
                status:"error",
                message:err
            })

}
}

module.exports=saveOrder