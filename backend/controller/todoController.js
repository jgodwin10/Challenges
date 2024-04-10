import asyncHandler from "express-async-handler";
import { Todo } from "../config/db/todoModel.js";
import { errorHandler } from "../utils/errorHandler.js";
import { User } from "../config/db/userModel.js";

export const createTodo = asyncHandler(async (req, res, next) => {
  const { text, username } = req.body;

  if (!text || text == "") {
    return next(errorHandler(400, "An Input is expected"));
  }
  if (!username) {
    return next(errorHandler(401, "User is not registered"));
  }
  const validUser = await User.findOne({ username });

  if (!validUser) {
    return next(errorHandler(401, "You are not an authorised user"));
  }

  const todo = await Todo.create({ text, username });

  res.status(200).send("Successful");
});

export const getTodo = asyncHandler(async (req, res, next) => {
  const { user } = req.params;

  const exist = await Todo.find({ username: user }).sort({ createdAt: -1 });

  res.status(200).json(exist);
});

export const deleteTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const todo = await Todo.findByIdAndDelete({ _id: id });

  res.send(todo);
});

export const updateTodo = asyncHandler(async (req, res) => {
 
  const { text, id } = req.body;

    const exist = await Todo.findByIdAndUpdate(id, { text });
    
    res.send(exist)
});
