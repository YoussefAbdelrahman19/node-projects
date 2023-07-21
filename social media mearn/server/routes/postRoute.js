import express from 'express';
import { createOne, getAll } from '../controllers/postController.js';
const router = express.Router();
router.get("/", getAll)
router.post("/", createOne)
export default router;