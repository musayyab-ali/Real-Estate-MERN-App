import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONOGO_CONNECTION_STRING)
  .then(() => {
    console.log("connected with monogo db..!!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("server is running on port 3000..!");
});
