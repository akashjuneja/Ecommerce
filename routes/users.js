var express = require('express');
var router = express.Router();
const { Pool } = require('pg');
const getFullSearchUser = require('../controllers/user');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  database:"postgres",
  password:"root",
  Port:5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  pool.query('SELECT * FROM "Users"',(err,result)=>{
    if(err){
      res.status(400).send({
        status:"error",
        message:err
      })
    }else{
      res.status(200).send(result)
    }
  })
});


router.get('/user',getFullSearchUser)



module.exports = router;
