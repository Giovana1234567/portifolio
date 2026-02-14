import { Router } from "express";
import { getAchievements } from "../controllers/achievements_controller.js";

const router = Router();

router.get("/", getAchievements );

export default router;
