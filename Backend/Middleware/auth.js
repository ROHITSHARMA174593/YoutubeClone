import jwt from "jsonwebtoken"

export const auth = (req,res,next) => {
    try{
        const token = req.header.authorization.split(" ")[1];
        let decodedata = jwt.verify(token, process.env.JWT_SECERT)
        req.userid = decodedata?.id;
        next();
    }catch(err){
        res.status(400).json("Invalid Credentials ... ")
        return;
    }

}

