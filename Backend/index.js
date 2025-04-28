import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import videoroutes from "./Routes/video.js"
import bodyParser from "body-parser";
import userRoutes from "./Routes/User.js"
import path from "path"

dotenv.config();


const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join('uploads')))


app.get("/", (req, res) => {
  res.send("YourTube is Working");
});


app.use(bodyParser.json())
app.use('/user', userRoutes)
app.use("/video", videoroutes)

 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});

const DB_URL = process.env.DB_URL;
mongoose 
  .connect(DB_URL)
  .then(() => {
    console.log("MongoDB Connected Successfully.");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });
  