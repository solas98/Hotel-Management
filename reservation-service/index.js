import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import ReservationRoute from "./Routes/reservation.js";
// import RoomsRoute from "./routes/Rooms.js";
import cookieParser from "cookie-parser";
import axios from "axios";


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
app.use("/api/reservation", ReservationRoute);
// app.use("/api/users", UsersRoute);
// app.use("/api_client/hotels", HotelsRoute);
// app.use("/api_client/rooms", RoomsRoute);


//test
app.listen(3001, () => {
  connect();
  console.log('Connected to Backend listening to 3001');
});
