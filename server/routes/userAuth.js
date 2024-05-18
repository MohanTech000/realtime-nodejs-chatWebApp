import express from "express";
const router = express.Router();

//auth controllers
import { userAuth } from "../controllers/Auth/userAuth.js";



//call
router.post("/authenticate", userAuth);




export default router;