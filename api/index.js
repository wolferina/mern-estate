import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from "./routes/user.route.js";

dotenv.config();

const PORT = 3000;
mongoose.connect(process.env.MANGO)
  .then(() => {
    console.log("connected to DB!")
  })
  .catch((err) => {
    console.error(err);
  })

const app = express();

app.listen(PORT, () => {
  console.log("server is running in port...",3000);
});

app.use("/api/user" , userRouter)