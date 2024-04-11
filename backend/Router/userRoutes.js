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

router.post("/api/register", register);
router.post("/api/login", login);
router.post("/api/todo", createTodo);
router.get("/api/todo/:user", getTodo);
router.delete("/api/todo/:id", deleteTodo);
router.patch("/api/todo", updateTodo);

export default router;
