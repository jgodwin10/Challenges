import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config()

export const generateToken = (user) => {
  const { username, _id } = user;

   return jwt.sign({ _id, username }, process.env.SECRET, {
    expiresIn: "1d",
  });
  
};

export const verifyToken = (token) => {
  const {username} = jwt.verify(token, process.env.SECRET)
  return username
}