var express = require('express');
var router = express.Router();
const {getProducts,addproducts,getFullSearchProduct} = require('../controllers/products');
const productValidate = require('../middlewares/productValidate');



router.post('/addProducts',addproducts)

router.get('/show',getProducts)
router.get('/showProduct',getFullSearchProduct)

module.exports=router;