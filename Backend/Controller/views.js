import Videofile from "../Model/Videofile.js";
import mongoose from "mongoose";

export const viewsController = async(req,res) => {
    const {id : id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("Video Unavailable...")
    }
    try {
        const files = await Videofile.findById(_id);
        const views = file.views;
        const updateViews = await Videofile.findByIdAndUpdate(_id,{
            $set:{Views : views + 1}
        })
        res.status(200).json(updateViews)

    } catch (err) {
        res.status(400).json("Error : ",err)
    }
}