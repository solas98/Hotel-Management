import jwt from "jsonwebtoken";

//Function to verify our Tokens
export const verifyToken = (req, res, next) =>{
    const token = req.cookies.access_token;
    if(!token){
       res.status(401).json("You are not Authedicated")
    }

    jwt.verify(token,process.env.TOKEN, (err,user)=>{
        if(err){
            res.status(403).json("No Valid Token!");
        }
        req.user = user;
        next();
    });
}


//verifyUser Function
export const verifyUser = (req,res,next) =>{

//We are call the verifyToken first
/*Because the endpoint contains the /:id if = with user.id which is 
inside the token it mean is verified

*/
verifyToken(req, res, next , () => {
    if(req.user.id === req.params.id || req.user.isAdmin){
    next();
    }else{
        res.status(403).json("Not Authorized User!");
    }
});


};




//verifyAdmin Function
export const verifyAdmin = (req,res,next) =>{
    //We are call the verifyToken first
    /*Verify is the user is admin    
    */
    verifyToken(req, res, next , () => {
        if(req.user.isAdmin){
        next();
        }else{
            res.status(403).json("Not Authorized User!");
        }
    });
    
    
    };