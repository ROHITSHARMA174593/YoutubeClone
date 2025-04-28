import Videofile from "../Model/Videofile.js";
import mongoose from "mongoose";

export const likeVideoController = async (req, res) => {
    const { id } = req.params;
    const { like } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("Video Unavailable ...");
    }

    try {
        const updateLike = await Videofile.findByIdAndUpdate(
            id,
            {
                $set: { like: like }    // like field update karna hai
            },
            { new: true }  // updated document return karega
        );
        res.status(200).json(updateLike);
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: "Error while updating like" });
    }
}
