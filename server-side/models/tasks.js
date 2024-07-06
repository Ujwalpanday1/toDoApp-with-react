import mongoose from "mongoose";

const taskSchema=new mongoose.Schema({
    title:{type:"string",
        required:true
    },
    description:{
        type:"string",
        required:true
    }
})

const Task=mongoose.model("Task",taskSchema)
export {Task}