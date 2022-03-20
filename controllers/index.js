const User = require("../models/user")
const bcrypt=require('bcrypt');
const saltRounds=10;

const signUp =async (req,res)=>{
    try{
        const {fname,lname,email,password}=req.body;
        const response=await User.findOne({where:{email}})
        console.log(response)
        if(response!=null){
            return res.status(401).send({
                error:"email does not exiists"
            })
        }else{
            
            const salt = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(password, salt);
            const newuser=new User({
                fname:fname,
                lname:lname,
                email:email.toLowerCase(),
                password:hash
            })
            const savedResponse=await newuser.save()
            console.log(savedResponse, res)
            return res.status(201).send({
                id:savedResponse.id,
                fname:savedResponse.fname,
                lname:savedResponse.lname,
                email:savedResponse.email
            });
            }
        
    }catch(err){
         console.log(err);
         res.status(500).send({error:"something occured"})
    }

}

const signUpAdmin =async (req,res)=>{
    try{
        const {fname,lname,email,password}=req.body;
        const response=await User.findOne({where:{email}})
        console.log(response)
        if(response!=null){
            return res.status(401).send({
                error:"email does not exiists"
            })
        }else{
            
            const salt = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(password, salt);
            const newuser=new User({
                fname:fname,
                lname:lname,
                email:email.toLowerCase(),
                password:hash,
                role:"admin"
            })
            const savedResponse=await newuser.save()
            req.session.User=savedResponse
            console.log(req.session.User)
            return res.status(201).send({
                id:savedResponse.id,
                fname:savedResponse.fname,
                lname:savedResponse.lname,
                email:savedResponse.email,
                email:savedResponse.email
            });
            }
        
    }catch(err){
         console.log(err);
         res.status(500).send({error:"something occured"})
    }

}


module.exports={signUp,signUpAdmin}