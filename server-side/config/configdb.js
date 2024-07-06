import mongoose from "mongoose"
import {configDotenv} from "dotenv"

configDotenv();
const connectDb=()=>{
    mongoose.connect(process.env.MONGOOSE_URI,{
        dbName:"Todo-with-react"
    }).then(()=>console.log("database connected"))
    .catch((e)=>console.log(e))
}
export {connectDb}