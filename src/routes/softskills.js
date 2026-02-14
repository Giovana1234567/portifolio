import { Router } from "express";
import { getSoftSkills } from "../controllers/softskills_controller.js";

const router = Router();

router.get("/", getSoftSkills );

export default router;
