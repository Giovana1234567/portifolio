import { Router } from "express";
import { getExperiences } from "../controllers/experiences_controller.js";

const router = Router();

router.get("/", getExperiences );

export default router;
