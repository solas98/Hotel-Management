import express from "express";

import { verifyAdmin, verifyToken, verifyUser } from "../token/verify.js";
import { createReservation, deleteReservation, getOneReservation, getReservetions, updateReservation } from "../Controllers/reservation_controller.js";


const router = express.Router();

//Create a user

router.post("/",verifyAdmin, createReservation);


// router.get("/checkauth",verifyToken, (req,res,next)=>{
//     res.send("Authedicated Successfully");
// });


//Update a Reservation
router.put("/:id",verifyUser, updateReservation);



// //Delete a User
// //Only an owner can delete User
router.delete("/:id",verifyUser, deleteReservation);



// //Get a User by id
// //Only an owner can get User
router.get("/:id",verifyUser, getOneReservation);



// //Get all Users
// //Only admins can GET all the Users
router.get("/",verifyAdmin, getReservetions);

export default router;