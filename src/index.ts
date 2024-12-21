import "reflect-metadata";
import app from "./app";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("debug", true);
mongoose
  .connect(process.env.MONGO_URI!)
  .then((_) => {
    console.log("Connected to db");
    app.listen(3000, () => {
      console.log("Server listening on port 3000");
    });
  })
  .catch((err) => {
    console.error(err);
  });
