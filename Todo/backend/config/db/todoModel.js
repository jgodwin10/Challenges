import mongoose from "mongoose";

const { Schema, model } = mongoose;

const TodoSchema = new Schema({
  text: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
  },
});

export const Todo = model("todo", TodoSchema);
