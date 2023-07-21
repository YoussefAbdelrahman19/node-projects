import express from 'express';
import { verifyToken } from '../middleware/jwt.js';
import { getOne, getAll, createOne, deleteOne } from '../controllers/gig.controller.js'
const router = express.Router();
router.get('/single/:id', verifyToken, getOne)
router.get('/', verifyToken, getAll)
router.post('/', verifyToken, createOne)
router.delete('/:id', verifyToken, deleteOne)
export default router;