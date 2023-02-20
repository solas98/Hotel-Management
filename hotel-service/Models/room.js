import mongoose from 'mongoose';


const RoomSchema = new mongoose.Schema({

    title:{ 
        type:String,
        required:true
    },
    price:{ 
        type:Number,
        required:true
    },
    description:{ 
        type:String,
        required:true
    },
    numOfPeople:{
        type:Number,
        required:true
    },
    numberOfRooms:[{
        number:Number,
        bookedDates:{type:[Date]}
    }]

},
    {timestamps:true} //Timestamps for create and update
);

//export Model, to create this model i use RoomSchema
export default mongoose.model("Room", RoomSchema);