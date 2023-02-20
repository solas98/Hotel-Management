import Room from "../Models/room.js";
import Hotel from "../Models/hotel.js";



//Our Hotel Model Contains Rooms as array of Strigns



//Create Room Function 
export const createRoom = async (req, res) => {

    const hotelId = req.params.hotelId; //This is for our Hotels as mentioned above
    const newRoom = new Room(req.body);
    try {
        const savedRoom = await newRoom.save();
        //After saving our new Room, we need to update our hotel
        try {            
            //We updating the hotel using findByIdAndUpdate
            await Hotel.findByIdAndUpdate(hotelId,{$push: {rooms: savedRoom.id}});            
        }catch(err) {
            res.status(500).json(err);
        }

        res.status(200).json(savedRoom);
    } catch (err) {
        res.status(500).json(err);
    }

};




//Update Room Function
export const updateRoom = async (req, res) => {

    try{
        const updatedRoom = await Room.findByIdAndUpdate(
           req.params.id, 
           {$set: req.body},
           {new:true} //After making a put request in Postman to showcase the updated JSON.
           );
        res.status(200).json(updatedRoom); 
       }catch(err){
           res.status(404).json(err);
       }

};



//Delete Room Function
export const deleteRoom = async (req, res) => {
    const hotelId = req.params.hotelId;

    try{
        await Room.findByIdAndDelete(req.params.id);
        try{
            await Hotel.findByIdAndUpdate(hotelId,
                {$pull:{rooms: req.params.id}});
        }
        catch{
            res.status(500).json(err);
        }

       res.status(200).json("Room Deleted successfully"); 
      }catch(err){
          res.status(500).json(err);
      }

};



//Get one Room Function by id
export const getOneRoom = async (req, res) => {
    try{
        const getRoom = await Room.findById(req.params.id);
        res.status(200).json(getRoom); 
       }catch(err){
           res.status(500).json(err);
       }

};


//Get all the Rooms Function
export const getRooms = async (req, res) => {
    try{
        const getRooms = await Room.find(req.params.id);
        res.status(200).json(getRooms); 
       }catch(err){
           res.status(500).json(err);
       }

};