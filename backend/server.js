import express from "express";
import dotenv from "dotenv";
import connnectDB from "./db/connectDB.js"
dotenv.config();
connnectDB();
const app= express();
const PORT =process.env.PORT || 5000;
app.listen(5000,()=> console.log(`serevr stared at http:localhost:${PORT}`))
