const sequelize = require("../database/index");
const Products = require("../models/products");


sequelize.sync() 
.then(() => {
return sequelize.authenticate()
})
.then(async () => {
    console.log("aaa")
const now= Date.now()
for (let i = 0; i < 100; i++) {
const productId = now + 1
await Products.create({
name:`product title ${productId}"`,
price: Math.floor(100+ Math.random()* 10000),
qty: Math.floor(1 + Math.random()* 1000),
description: `product description ${productId}`,
image: `https://picsum.photos/100?product-${productId}`
})
}
})
.catch(async e=> { await sequelize.close()
    console.log(e)

}).catch(err=>console.log(err))