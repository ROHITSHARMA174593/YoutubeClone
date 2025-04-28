import express from "express";
import {login} from "../Controller/Auth.js"
import { getAllChannel, updateChannelData } from "../Controller/channel.js";
const routes = express.Router();

routes.post('/login', login)
routes.patch('/update/:id',updateChannelData)
routes.get('/getAllChannel', getAllChannel)

export  default routes;