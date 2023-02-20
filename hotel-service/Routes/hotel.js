import express from "express";
import Hotel from "../Models/hotel.js";
import { createHotel } from "../Controllers/hotel_controller.js";
import { updateHotel } from "../Controllers/hotel_controller.js";
import { deleteHotel } from "../Controllers/hotel_controller.js";
import { getOneHotel } from "../Controllers/hotel_controller.js";
import { getHotels } from "../Controllers/hotel_controller.js";
import { verifyAdmin, verifyToken, verifyUser } from "../token/verify.js";
const router = express.Router();

//Create a hotel

router.post("/",verifyAdmin, createHotel);



//Update a hotel
router.put("/:id",verifyAdmin,updateHotel);



//Delete a hotel
router.delete("/:id",verifyAdmin, deleteHotel);



//Get a hotel by id
router.get("/:id", getOneHotel);



//Get all hotels

router.get("/", getHotels);

export default router;