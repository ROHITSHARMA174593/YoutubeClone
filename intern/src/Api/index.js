import axios from "axios";

const API = axios.create({ baseURL: `http://localhost:5000/` });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
}); 

export const login = (authdata) => API.post("/user/login", authdata);
export const updateChannelData = (id, updateData) =>
  API.patch(`/user/update/${id}`, updateData);
export const fetchAllChannel = () => API.get("/user/getAllChannel");

export const uploadvideo = ({ filedata, fileoption }) => API.post("/video/uploadVideo", filedata, fileoption);
export const getvideos = () => API.get("/video/getVideo");
export const likeVideo = (id, like) => API.patch(`/video/like/${id}`, { like });
export const viewsVideo = (id) => API.patch(`/video/view/${id}`);

export const postComment = (commentData) => API.post("/comment/post", commentData)
export const deleteComment = (id) => API.delete(`/comment/delete/${id}`)
export const editComment = (id, commentBody) => API.patch(`/comment/edit/${id}`, {commentBody})
export const getAllComment = () => API.get("/comment/get")


export const addToHistory = (historyData) => API.post("/video/history", historyData)
export const getAllHistory = () => API.get("/video/getAllHistory")
export const deleteHistory=(userid)=>API.delete(`/video/deletehistory/${userid}`)

export const addToLikeVideo=(likedvideodata)=>API.post('/video/l ikevideo',likedvideodata)
export const getAllLikedVideo=()=>API.get('/video/getalllikevide')
export const deleteLikedVideo=(videoid,viewer)=>API.delete(`/video/deletelikevideo/${videoid}/${viewer}`)

export const addToWatchLater=(watchlaterdata)=>API.post('/video/watchlater',watchlaterdata)
export const getAllWatchLater=()=>API.get('/video/getallwatchlater')
export const deleteWatchLater=(videoid,viewer)=>API.delete(`/video/deletewatchlater/${videoid}/${viewer}`)





// import axios from "axios"
// const API=axios.create({baseURL:`http://localhost:5000/`})

// API.interceptors.request.use((req)=>{
//     if(localStorage.getItem("Profile")){
//         req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem("Profile")).token}`
//     }
//     return req;
// })

// export const login=(authdata)=>API.post("/user/login",authdata);
// export const updatechaneldata=(id,updatedata)=>API.patch(`/user/update/${id}`,updatedata)
// export const fetchallchannel=()=>API.get("/user/getallchannel");

// export const uploadvideo=(filedata,fileoption)=>API.post("/video/uploadvideo",filedata,fileoption)
// export const getvideos=()=>API.get("/video/getvideos");
// export const likevideo=(id,Like)=>API.patch(`/video/like/${id}`,{Like});
// export const viewsvideo=(id)=>API.patch(`/video/view/${id}`);

// export const postcomment=(commentdata)=>API.post('/comment/post',commentdata)
// export const deletecomment=(id)=>API.delete(`/comment/delete/${id}`)
// export const editcomment=(id,commentbody)=>API.patch(`/comment/edit/${id}`,{commentbody})
// export const getallcomment=()=>API.get('/comment/get')

// export const addtohistory=(historydata)=>API.post("/video/history",historydata)
// export const getallhistory=()=>API.get('/video/getallhistory')
// export const deletehistory=(userid)=>API.delete(`/video/deletehistory/${userid}`)

// export const addtolikevideo=(likedvideodata)=>API.post('/video/likevideo',likedvideodata)
// export const getalllikedvideo=()=>API.get('/video/getalllikevide')
// export const deletelikedvideo=(videoid,viewer)=>API.delete(`/video/deletelikevideo/${videoid}/${viewer}`)

// export const addtowatchlater=(watchlaterdata)=>API.post('/video/watchlater',watchlaterdata)
// export const getallwatchlater=()=>API.get('/video/getallwatchlater')
// export const deletewatchlater=(videoid,viewer)=>API.delete(`/video/deletewatchlater/${videoid}/${viewer}`)
