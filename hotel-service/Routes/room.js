import express from "express";
import Hotel from "../Models/hotel.js";
import { verifyAdmin, verifyToken, verifyUser } from "../token/verify.js";
import { createRoom, deleteRoom, getOneRoom, getRooms, updateRoom } from "../Controllers/room_controller.js";
const router = express.Router();

//Create a room
/*In order to create a room , the path contains the hotel id
because we are creating a room in a hotel*/
router.post("/:hotelId",verifyAdmin, createRoom);



//Update a room
router.put("/:id",verifyAdmin,updateRoom);


//Delete a room
router.delete("/:id",verifyAdmin, deleteRoom);



//Get a room by id
router.get("/:id", getOneRoom);



//Get all rooms

router.get("/", getRooms);

export default router;