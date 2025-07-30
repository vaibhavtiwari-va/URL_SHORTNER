import express from "express"
import { getAllUserUrls } from "../contoller/user.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js"

const router = express.Router()

router.post("/urls",authMiddleware, getAllUserUrls)

export default router