import mongoose from 'mongoose';


const ReservationsSchema = new mongoose.Schema({

    hotelId:{ //User's username
        type: mongoose.SchemaTypes.ObjectID,
        required:true
    },
    userId:{ //User's email address
        type: mongoose.SchemaTypes.ObjectID,
        required:true
    },
    startDate:{ //User's Password
        type:Date,
        required:true
    },
    endDate:{ //flag to note if the User is ADMIN or NOT
        type: Date,
        default: true
    }

},
    {timestamps:true} //Timestamps for create and update
);

//export Model, to create this model i use UserSchema
export default mongoose.model("Reservation", ReservationsSchema);