import Videofile from "../Model/Videofile.js";


export const uploadVideo = async(req,res) => {
    if(req.file === undefined){
        res.status(404).json({message: "Please Upload a MP4 video file Only"})
    }else{
        try {
            const file = new Videofile({
                videoTitle:req.body.title,
                fileName:req.file.originalname,
                filePath:req.file.path,
                fileType:req.file.mimetype,
                fileSize:req.file.size,
                videoChannel:req.body.channel,
                Uploader:req.body.uploader
            })
            console.log(file)
            await file.save()   
            res.status(200).send("File Uploaded Successfully.")
        } catch (err) {
            res.status(404).json(err.message)
            return;
        }
    }
}


export const getAllVideos = async(req,res) => {
    try{
        const files = await Videofile.find()
        res.status(200).send(files)
    }catch(err){
        res.status(404).json(err.message)
        return;
    }
}