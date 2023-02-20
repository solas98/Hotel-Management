import Hotel from "../Models/hotel.js";

//async because it is going to take some time
//Create Hotel Function 
export const createHotel = async (req, res) => {

    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (err) {
        res.status(500).json(err);
    }

};

//Update Hotel Function
export const updateHotel = async (req, res) => {

    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(
           req.params.id, 
           {$set: req.body},
           {new:true} //After making a put request in Postman to showcase the updated JSON.
           );
        res.status(200).json(updatedHotel); 
       }catch(err){
           res.status(500).json(err);
       }

};



//Delete Hotel Function
export const deleteHotel = async (req, res) => {

    try{
        await Hotel.findByIdAndDelete(req.params.id);
       res.status(200).json("Hotel Deleted successfully"); 
      }catch(err){
          res.status(500).json(err);
      }

};



//Get one Hotel Function by id
export const getOneHotel = async (req, res) => {
    try{
        const getHotel = await Hotel.findById(req.params.id);
        res.status(200).json(getHotel); 
       }catch(err){
           res.status(500).json(err);
       }

};


//Get all the Hotels Function
export const getHotels = async (req, res) => {
    try{
        const getHotels = await Hotel.find(req.params.id);
        res.status(200).json(getHotels); 
       }catch(err){
           res.status(500).json(err);
       }

};