import express from "express";
import { getAll, getOne, createOne } from "../controllers/order.controller.js";
import { verifyToken } from "../middleware/jwt.js";
const router = express.Router();
router.get("/", getAll);
router.get("/:id", getOne);
router.post("/:gigId", verifyToken, createOne);
export default router;
