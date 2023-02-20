import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({

    username:{ //User's username
        type:String,
        required:true,
        unique:true
    },
    email:{ //User's email address
        type:String,
        required:true,
        unique:true
    },
    password:{ //User's Password
        type:String,
        required:true
    },
    isAdmin:{ //flag to note if the User is ADMIN or NOT
        type: Boolean,
        default: false
    }

},
    {timestamps:true} //Timestamps for create and update
);

//export Model, to create this model i use UserSchema
export default mongoose.model("User", UserSchema);