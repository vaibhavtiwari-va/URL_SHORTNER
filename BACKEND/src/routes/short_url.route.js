import express from 'express';
import { CreateshortUrl } from '../contoller/short_url.controller.js';
const router = express.Router();

router.post("/",CreateshortUrl);

export default router;