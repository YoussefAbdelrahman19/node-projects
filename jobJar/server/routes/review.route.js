import express from 'express';
import { getAll,getOne ,deleteOne,createOne} from '../controllers/review.controller.js';
import { verifyToken } from '../middleware/jwt.js';
const router = express.Router();
router.get('/', getAll)
router.get('/:gigId', getOne)
router.delete('/:id',verifyToken, deleteOne)
router.post('/',verifyToken, createOne)
export default router;  