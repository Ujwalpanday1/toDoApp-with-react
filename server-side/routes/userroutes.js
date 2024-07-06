import { Router } from "express";
import {addTask} from "../controllers/userController.js"

const router=Router();

router.post("/addTask",addTask)
router.get("/",(req,res)=>{
    res.send("hey")
})

export {router}