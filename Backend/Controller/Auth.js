import users from "../Model/Auth.js"
import jwt from "jsonwebtoken"

export const login = async(req,res) => {
    const {email} = req.body;
    console.log(email)
    try{
        const userExist = await users.findOne({email})
        if(!userExist){
            try {
                const newUser = await users.create({email})
                const token = jwt.sign({
                    email:newUser.email,id:newUser._id
                },preocess.env.JWT_SECERT,{
                    expiresIn:"1h"
                }
            )
                res.status(200).json({result:newUser, token})
            } catch (error) {
                res.status(500).json({message:"Somethig Went Wrong"})
                return;
            }
        }else{
            const token = jwt.sign({
                email:newUser.email,id:newUser._id
            },preocess.env.JWT_SECERT,{
                expiresIn:"1h"
            }
        )
            res.status(200).json({result : userExist, token})
        }
    }catch(err){
        res.status(500).json({message:"Somethig Went Wrong"})
        return
    }

}