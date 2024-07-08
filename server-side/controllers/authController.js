
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv();
const handleLogin=(req,res)=>{

    const {username,password}=req.body;
    User.findOne({username}).select('+password').then((user)=>{
        if(user.password==password){
            const token=jwt.sign({_id:user._id},process.env.JWT_SECRET)
             res.cookie("token",token,{
             httpOnly: true, 
             maxAge: 1000 * 86400 * 30, // 30 days
             sameSite: 'strict' 
             })
             res.status(200).send('Login successful and token set in cookie');
        }
        else{
            res.status(401).send('password not matched')
        }
      

    }).catch((e)=>res.status(401).send('loginFailed'))
    
    

}

const handleSignup=(req,res)=>{
    
    const {name,username,password}=req.body
    User.create({
        name,username,password
    }).then((user)=>{
        const token=jwt.sign({_id:user._id},process.env.JWT_SECRET);
        res.cookie("token",token,{
            path: '/',
            httpOnly:true,
            maxAge:1000*86400*30

        })
        res.status(200).send('Signup successful and token set in cookie');
        
        
    })
}

const checkAuth=(req,res)=>{

   res.status(200).send(req.user)
}

export {handleLogin,handleSignup,checkAuth}