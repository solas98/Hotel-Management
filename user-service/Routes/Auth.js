import express from "express";
import { Register } from "../Controllers/auth_controller.js";
import { Login } from "../Controllers/auth_controller.js";


const router = express.Router();


//Register a USER
router.post('/register', Register);
router.post('/login', Login);



export default router;