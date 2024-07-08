import { Router } from "express";
import {addTask} from "../controllers/userController.js"
import jwt from "jsonwebtoken";
const router=Router();

router.post("/addTask",addTask)
router.get("/",(req,res)=>{
    res.send("hei")
})

export {router}