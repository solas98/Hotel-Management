import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
// import AuthRoute from "./routes/Auth.js";
// import UsersRoute from "./routes/Users.js";
import HotelsRoute from "./Routes/hotel.js";
import RoomsRoute from "./Routes/room.js";
import cookieParser from "cookie-parser";
// import axios from "axios";


const app = express();
dotenv.config();


//trying to connect to the database
const connect = async () =>{
    try {
        mongoose.set("strictQuery",true);
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to Database');
    }catch (error){
        throw(error);
    }
};



//Express middlewares
//Using cookie parser for our JWT tokens
app.use(cookieParser());
//to sent an json to an express server , you can't do that by default
app.use(express.json());

//when using the paths use the Routes
// app.use("/api_client/auth", AuthRoute);
// app.use("/api_client/users", UsersRoute);
app.use("/api/hotels", HotelsRoute);
app.use("/api/rooms", RoomsRoute);


//test
app.listen(3002, () => {
  connect();
  console.log('Connected to Hotels Backend listening to 3002');
});
