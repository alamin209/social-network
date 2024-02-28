import express from "express";
import dotenv from "dotenv";
import connnectDB from "./db/connectDB.js";

dotenv.config();
connnectDB();

const app = express();
const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
