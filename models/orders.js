const {DataTypes}=require('sequelize');
const sequelize = require('../database');

const Orders=sequelize.define('Orders',{
    id:{
            type: DataTypes.INTEGER,
            primaryKey:true
    },
    pname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    qty:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:1
    },
    amount:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    discount:{
        type:DataTypes.INTEGER,
        allowNull:true
        
    },
    charge:{
      type:DataTypes.INTEGER,
        allowNull:false
    },
    price:{
      type:DataTypes.INTEGER,
        allowNull:false
    },
    category:{
        type:DataTypes.STRING,
        allowNull:false
    }

})

module.exports=Orders;