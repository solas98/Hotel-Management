import User from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



//Register Function
export const Register = async (req,res) =>{

try{
    // const newUser = ({username:req.body.username});
    // if(!usr) res.status(400).json("Username or Email already used");
    //hash and salt the password for protection
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password,salt);

    //Create the new user
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:hash

    });

    

    await newUser.save();
    res.status(200).json("User has been created successfully");
}catch(err){
 throw(err);
}

};


//Login Function
export const Login = async (req, res) =>{

try{
    const user = await User.findOne({ username: req.body.username });
    //if username not exist   
    if( !user ) {    
        res.status(404).json("Wrong Password or Username");
    }



    //compare the hashed password with the provided one and check the if exists.
    const checkPassword = await bcrypt.compare(
        req.body.password,
        user.password);

    if(!checkPassword) {
         res.status(404).json("Wrong Password or Username");
        }

    /* If password is correct a token is going to be generated 
    and we gonna check if it is admin or not based on that JWT token.

    The random number is generated through the following command:
    openssl rand -base64 32
   */
  const token = jwt.sign(
    {id:user._id, isAdmin:user.isAdmin},
     process.env.TOKEN);

    /*Every time we login through an API call we can more details
    than we must get. Retrieve data excluding password & isAdmin flag*/
    const { password, isAdmin, ...others} = user._doc;
    //return the User
    res
    .cookie(
        "access_token",
         token,
         {httpOnly: true})
    .status(200)
    .json(others);
}  
catch(err){
 throw(err);
}
};
