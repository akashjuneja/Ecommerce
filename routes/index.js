var express = require('express');
const signUpValidate = require('../middlewares/signUpValidate');
const {signUp,signUpAdmin}=require('../controllers/index');
const signInValidate = require('../middlewares/signInValidate');
const signIn = require('../controllers/signIn');


var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  const sess=req.session
  console.log(sess)
  sess.username='akash'
  console.log(sess.username)
  res.render('index', { title: 'Express' });
});

router.post('/signUp',signUpValidate,signUp);
router.post('/signIn',signInValidate,signIn);
router.post('/admin',signUpValidate,signUpAdmin);



module.exports = router;
