import { Router } from "express";
import {handleLogin,handleSignup,checkAuth} from "../controllers/authController.js"
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router=Router();

router.post("/login",handleLogin)
router.post("/signup",handleSignup)
router.get("/checkAuth",isAuthenticated,checkAuth)
export {router}



