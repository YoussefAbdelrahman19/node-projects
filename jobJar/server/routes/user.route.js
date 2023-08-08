import express from 'express';
import { getAll,getOne ,deleteOne} from '../controllers/user.controller.js';
import { verifyToken } from '../middleware/jwt.js';
const router = express.Router();
router.get('/', getAll)
router.get('/:id', getOne)
router.delete('/:id',verifyToken, deleteOne)
export default router;