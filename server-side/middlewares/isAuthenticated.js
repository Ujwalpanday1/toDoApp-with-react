import { configDotenv } from "dotenv";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

configDotenv();

const isAuthenticated=(req,res,next)=>{
    const token=req.cookies.token;
    if(token){
         jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
            if(err){
                res.status(401).send("access denied wrong signature")
            }
            else{
                 User.findById(decoded).then((user)=>{
        if(!user){
            res.status(401).send("access denied no user matched")
        }
        else{
            req.user=user;
            next();
        }

    }).catch((e)=>res.status(400).send("access denied authorization failed"))
            }
         });
   
    }
   else{
    
    res.status(401).send("access denied no token provided")
   }
}
export default isAuthenticated