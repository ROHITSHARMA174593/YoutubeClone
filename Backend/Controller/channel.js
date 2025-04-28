import mongoose from "mongoose";
import user from "../Model/Auth.js"



export const updateChannelData = async(req,res) => {
    const {id : _id} = req.params;
    const {name, desc} = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(400).send("Channel unavailable.")
    }
    try{
        const updateData = await user.findByIdAndUpdate(
            _id,{
                $set:{
                    name : name,
                    desc : desc,
                },
            },
            {new:true}
        );
        res.status(200).json(updateData)
    }catch(err){
        res.status(405).json({message:err.message})
        return;
    }
}



export const getAllChannel = async(req,res) => {
    try{
        const allChannel = await user.find();
        const allChannelData = [];
        allChannel.forEach((curElem) => {
            allChannelData.push({
                _id : channel._id,
                name : channel.name,
                email : channel.email,
                desc : channel.desc
            });
        })
    }catch(err){
        console.log(err.message)
    }
}