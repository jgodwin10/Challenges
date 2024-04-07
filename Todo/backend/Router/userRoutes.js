import { Router } from "express";
import { login, register } from "../controller/userController.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = Router();

router.post("/register", register, verifyToken);
router.post("/login", login)

export default router;
