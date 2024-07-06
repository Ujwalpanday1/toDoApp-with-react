import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import { createServer } from "http";
import {connectDb} from "./config/configdb.js"
import {router as userRouter} from "./routes/userroutes.js"




const app=express();
const server=createServer(app);
app.use(cors());
app.use(bodyParser.json());

connectDb();

app.use("/",userRouter)




server.listen('3000',()=>{
    console.log("server running in port 3000" )
})
