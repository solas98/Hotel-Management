import mongoose from 'mongoose';


const HotelSchema = new mongoose.Schema({

    name:{ //type of hotel name & required field
        type:String,
        required:true
    },
    type:{ //type of hotel (appartment,hotel,etc)
        type:String,
        required:true
    },
    city:{ // Hotel's City based
        type:String,
        required:true
    },
    address:{ // Hotel's address 
        type:String,
        required:true
    },
    hotelDescription:{ //Hotel's description
        type:String,
        required:true
    },
    rooms:{ //type of rooms --> Array of Strings (Room Model)
        type:[String]
    },
    rating:{ // Hotel's rating from 0 to 5
        type:Number,
        min:0,
        max:5
    }

});

//export Model, to create this model i use hotelSchema
export default mongoose.model("Hotel", HotelSchema);