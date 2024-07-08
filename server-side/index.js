import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import { createServer } from "http";
import {connectDb} from "./config/configdb.js"
import {router as userRouter} from "./routes/userroutes.js"
import {router as authRouter} from "./routes/authroutes.js"
import cookieParser from "cookie-parser";


const app=express();
const server=createServer(app);

const corsOptions = {
    origin: 'http://localhost:5173', // Frontend domain
    credentials: true, // Allows sending cookies
  };

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());


connectDb();

app.use("/",userRouter)
app.use("/",authRouter)


server.listen('3000',()=>{
    console.log("server running in port 3000")
})
