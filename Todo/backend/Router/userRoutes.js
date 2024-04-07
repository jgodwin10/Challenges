import { Router } from "express";
import { errorHandler } from "../utils/errorHandler";
import { User } from "../config/db/userModel";

const router = Router()

router.post('/register', register)


export default router