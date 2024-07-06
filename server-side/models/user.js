import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{type:"string",
        required:true,
    },
    username:{type:"string",
        required:true,
        unique:true
    },
    password:{type:"string",
        require:true,
        select:false
    },
    taskid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Task
    }
})

const User=mongoose.model("User",userSchema);

export {User}