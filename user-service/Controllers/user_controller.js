import User from "../Models/User.js";


//NO Need to have create user function because we have REGISTER for that.
// //async because it is going to take some time
// //Create User Function 
export const createUser = async (req, res) => {

    const newUser = new User(req.body);

    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(401).json("User with this email already exists");
    }

};

//Update User Function
export const updateUser = async (req, res) => {

    try{
        const updatedUser = await User.findByIdAndUpdate(
           req.params.id, 
           {$set: req.body},
           {new:true} //After making a put request in Postman to showcase the updated JSON.
           );
        res.status(200).json(updatedUser); 
       }catch(err){
           res.status(500).json(err);
       }

};



//Delete User Function
export const deleteUser = async (req, res) => {

    try{
        await User.findByIdAndDelete(req.params.id);
       res.status(200).json("User Deleted successfully"); 
      }catch(err){
          res.status(500).json(err);
      }

};



//Get a User Function by id
export const getUser = async (req, res) => {
    try{
        const getUser = await User.findById(req.params.id);
        res.status(200).json(getUser); 
       }catch(err){
           res.status(500).json(err);
       }

};


//Get a User Function by id
export const getUserByUsername = async (req, res) => {
    try{
        const getUser = await User.find(req.params.username);
        res.status(200).json(getUser); 
       }catch(err){
           res.status(500).json(err);
       }

};

//Get all the Users Function
export const getUsers = async (req, res) => {
    try{
        const getUsers = await User.find(req.params.id);
        res.status(200).json(getUsers); 
       }catch(err){
           res.status(500).json(err);
       }

};