import express from "express";
// import Hotel from "../Models/Hotel.js";
import { verifyAdmin, verifyToken, verifyUser } from "../token/verify.js";
import { createUser, deleteUser, getUserByUsername, updateUser } from "../Controllers/user_controller.js";
import { getUser } from "../Controllers/user_controller.js";
import { getUsers } from "../Controllers/user_controller.js";


const router = express.Router();

//Create a user

router.post("/", createUser);


router.get("/checkauth",verifyToken, (req,res,next)=>{
    res.send("Authedicated Successfully");
});


//Update a User
//Only an owner can delete User
router.put("/:id",verifyUser, updateUser);



//Delete a User
//Only an owner can delete User
router.delete("/:id",verifyUser, deleteUser);



//Get a User by id
//Only an owner can get User
router.get("/:id", getUser);

router.get("/:username",verifyUser, getUserByUsername);

//Get all Users
//Only admins can GET all the Users
router.get("/",verifyAdmin, getUsers);

export default router;