import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { UserMiddleware } from "./middleware/AuthMiddleware.js";
import router from "./Router/userRoutes.js";
import path from "path";
import cors from "cors";

dotenv.config();

mongoose.connect(process.env.MONGODB).then(() => {
  console.log("connected");
});

const __dirname = path.resolve();

var corsOptions = {
  origin: "https://challenges-ih81.onrender.com",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) chok
}

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

const Port = process.env.PORT || 3000;

app.use(router);

app.use(express.static(path.join(__dirname, "frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.use(UserMiddleware);

app.listen(Port, () => {
  console.log(`Server listening on PORT: ${Port}`);
});
