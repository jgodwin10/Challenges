import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { UserMiddleware } from "./middleware/AuthMiddleware";
import router from "./Router/userRoutes";

dotenv.config();

mongoose.connect(process.env.MONGODB).then(() => {
  console.log("connected");
});

const app = express();

const Port = process.env.PORT || 3000;

app.use(router)

app.use(UserMiddleware);

app.listen(Port, () => {
  console.log(`Server listening on PORT: ${Port}`);
});
