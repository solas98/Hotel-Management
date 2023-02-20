import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import axios from "axios";
import mongoose from 'mongoose';
import Reservation from "../Models/Reservation.js";

export const createReservation = async (req,res) => {
    try {
      
      // const hotelId = mongoose.Types.ObjectID(req.body.hotelId);
      // const userId = mongoose.Types.ObjectID(req.body.userId);
      

        const newReservation = new Reservation(req.body);
    
            const savedReservation = await newReservation.save();
            res.status(200).json(savedReservation);
        } catch (err) {
            res.status(500).json(err);
        }
           
    
  };


  //Update Reservation Function
export const updateReservation = async (req, res) => {

  try{
      const updatedReservation = await Reservation.findByIdAndUpdate(
         req.params.id, 
         {$set: req.body},
         {new:true} //After making a put request in Postman to showcase the updated JSON.
         );
      res.status(200).json(updatedReservation); 
     }catch(err){
         res.status(500).json(err);
     }

};



//Delete Reservation Function
export const deleteReservation = async (req, res) => {

  try{
      await Reservation.findByIdAndDelete(req.params.id);
     res.status(200).json("Reservation Deleted successfully"); 
    }catch(err){
        res.status(500).json(err);
    }

};



//Get one Hotel Function by id
export const getOneReservation = async (req, res) => {
  try{
      const getReservation = await Reservation.findById(req.params.id);
      res.status(200).json(getReservation); 
     }catch(err){
         res.status(500).json(err);
     }

};


//Get all the Hotels Function
export const getReservetions = async (req, res) => {
  try{
      const getReservetions = await Reservation.find(req.params.id);
      res.status(200).json(getReservetions); 
     }catch(err){
         res.status(500).json(err);
     }

};