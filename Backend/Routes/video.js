import express from "express"
import { likeVideoController } from "../Controller/Like.js";
import { viewsController } from "../Controller/views.js";
import { uploadVideo,getAllVideos } from "../Controller/video.js";
import { historyController,deleteHistory,getAllHistoryController } from "../Controller/History.js";
import { watchlatercontroller,getAllWatchLaterController,deletewatchlater } from "../Controller/watchlater.js";
import { likedvideocontroller,getalllikedvideo,deletelikedvideo } from "../Controller/likedvideo.js";
import upload from "../Helper/fileHelper.js";
import {auth}  from "../middleware/auth.js"
const routes=express.Router();

routes.post("/uploadvideo",auth,upload.single("file"),uploadVideo)

routes.get("/getvideos",getAllVideos)   
routes.patch('/like/:id',auth,likeVideoController)
routes.patch('/view/:id',viewsController)
 
routes.post('/history',auth,historyController)
routes.get('/getallhistory',getAllHistoryController)
routes.delete('/deletehistory/:userid',auth,deleteHistory)

routes.post('/watchlater',auth,watchlatercontroller)
routes.get('/getallwatchlater',getAllWatchLaterController)
routes.delete('/deletewatchlater/:videoid/:viewer',auth,deletewatchlater)

routes.post('/likevideo',auth,likedvideocontroller)
routes.get('/getalllikevide',getalllikedvideo)
routes.delete('/deletelikevideo/:videoid/:viewer',auth,deletelikedvideo)

export default routes