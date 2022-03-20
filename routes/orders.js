var express = require('express');
const saveOrder = require('../controllers/orders');
//const orderCheck = require('../middlewares/orderCheck');
var router = express.Router();


router.post('/order',saveOrder)

module.exports=router;