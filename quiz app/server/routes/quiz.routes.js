import express from 'express';
import { getQuestions } from "../controllers/quiz.controller.js";

const router = express.Router();
router.get('/:amount/:difficulty', getQuestions)
export default router;