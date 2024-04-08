import { User } from "../config/db/userModel.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/errorHandler.js";
import dotenv from "dotenv";
import { generateToken, verifyToken } from "../utils/generateToken.js";
import asyncHandler from "express-async-handler";

dotenv.config();

const salt = bcrypt.genSaltSync(10);

//REGISTER ROUTE

export const register = asyncHandler(async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!email || !username || !password) {
    return next(errorHandler(400, "Invalid Input, All Field are required"));
  }

  const exist = await User.findOne({ email });
  const existUsername = await User.findOne({ username });

  if (exist) {
    return next(errorHandler(400, "User existed, Try another Input"));
  }
  if (existUsername) {
    return next(errorHandler(400, "User existed, Try another Input"));
  }

  const hashedPassword = bcrypt.hashSync(password, salt);

  const user = await User.create({ email, username, password: hashedPassword });

  if (user) {
    const token = generateToken(user);
    const verified = verifyToken(token)
    res.status(201).json(
      token
    );
  } else {
    return next(errorHandler(401, "Invalid User"));
  }
});

//LOGIN ROUTE

export const login = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const valid = await User.findOne({ username });
    const validPassword = bcrypt.compareSync(password, valid.password);

    if (valid && validPassword) {
      const token = generateToken(valid);
      const verified = verifyToken(token)
      res.status(200).json(
         token
      );
    } else {
      return next(errorHandler(401, "Inavlid Credentials"));
    }
  } catch (error) {
   return next(errorHandler(401, "Invalid Credentials"));
  }
});
