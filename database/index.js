const {Sequelize} = require('sequelize');
const sequelize=new Sequelize(
    'postgres', 
    'postgres', 
    'root', 
    {
  host: 'localhost',
  dialect: 'postgres'
})

sequelize.sync();

(async()=>{
    try{
       await  sequelize.authenticate()
       console.log("Connection established with DB")
    }catch(err){
    console.log({error:err})
    }
})();

module.exports=sequelize