const Products = require("../models/products");
const {Op}= require("sequelize");


//getProducts on Pagination and on filtering
const getProducts= async (req, res)=>{
    try{
const query=req.query;
const page=parseInt(query.page)||1;
const count=parseInt(query.count)||10;
const after=parseInt(query.after);
let sql={}
if(after){
    sql={
    where: {
    authorId: {
      [Op.gt]: after
    }
  }
    }
}else{
    sql={
        offset:count *(page-1)
    }
}
const products=await Products.findAll({
    ...sql,
    attributes:{exclude:['image']},
    limit:count
})
return res.status(200).send({
    products
})
    }catch(err){

        console.log(err)
        return res.status(500).send({
    err
})
    }
}

// add the products
const addproducts=async (req, res)=>{
    try{
        const {name,price,qty,description ,image}=req.body;
        let id=Math.floor(Math.random() * 100)
        let product=await Products.findOne({where:{name}})
        if(product!=null){
            return res.status(400).send({
                message:"product already exists"
            })
        }else{
            const newuser=new Products({
                id:id,
                name:name,
                price:price,
                qty:qty,
                description:description,
                image:image
            })
            
            const savedProduct= await newuser.save();
            console.log(savedProduct)
            return res.status(200).send({
                savedProduct
            })
        }

    }catch(err){
        console.log(err)
        return res.status(500).send({
                err
            })
    }
}

//get fullSearchUser
const getFullSearchProduct=async (req, res)=>{
    try{
        const query=req.query;
        let product= await Products.findAll({
            where :{
                name:{
                    [Op.like]:'%'+query.q +'%'
                }
            }
        })
        // let {id,name,price,qty,description ,image}=product
        console.log(product)
        return res.status(200).send({
                 product
        })

    }catch(err){
        console.log(err)
        return res.status(500).send({
                err
            })
    }
}

module.exports={getProducts,addproducts,getFullSearchProduct}