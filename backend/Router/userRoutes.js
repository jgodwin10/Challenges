import { Router } from "express";
import { login, register } from "../controller/userController.js";
import { verifyToken } from "../utils/verifyToken.js";
import {
  createTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from "../controller/todoController.js";

const router = Router();

router.post("/register", register, verifyToken);
router.post("/login", login);
router.post("/todo", createTodo);
router.get("/todo/:user", getTodo);
router.delete("/todo/:id", deleteTodo);
router.patch("/todo", updateTodo);

export default router;
