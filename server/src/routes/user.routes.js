import express from "express";
import { createUser, readUser } from "../controllers/user.controller.js";
import protectedRoute from "../middleware/protectedRoute.js";

const router = express.Router();

router.post("/add", protectedRoute, createUser);
router.get("/read", readUser);

export default router;
