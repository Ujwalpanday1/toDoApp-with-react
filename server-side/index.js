import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import { createServer } from "http";




const app=express();
const server=createServer(app);
app.use(cors());
app.use(bodyParser.json());

app.post("/",(req,res)=>{
    console.log(req.body);
    res.send("hello")
})




server.listen('3000',()=>{
    console.log("server running in port 3000" )
})
