import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { UserMiddleware } from "./middleware/AuthMiddleware.js";
import router from "./Router/userRoutes.js";
import path from 'path'



dotenv.config();

mongoose.connect(process.env.MONGODB).then(() => {
  console.log("connected");
});

const __dirname = path.resolve()


const app = express();

app.use(express.json());

const Port = process.env.PORT || 3000;

app.use(router);

app.use(express.static(path.join(__dirname, 'frontend/dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})

app.use(UserMiddleware);

app.listen(Port, () => {
  console.log(`Server listening on PORT: ${Port}`);
});
