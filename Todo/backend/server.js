import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { UserMiddleware } from "./middleware/AuthMiddleware.js";
import router from "./Router/userRoutes.js";
import cors from "cors";

let corsOptions = {
  origin: ["http://localhost:5173"],
};

dotenv.config();

mongoose.connect(process.env.MONGODB).then(() => {
  console.log("connected");
});

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

const Port = process.env.PORT || 3000;

app.use(router);

app.use(UserMiddleware);

app.listen(Port, () => {
  console.log(`Server listening on PORT: ${Port}`);
});
