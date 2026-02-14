import { Router } from "express";
import { getEducation } from "../controllers/education_controller.js";

const router = Router();

router.get("/", getEducation );

export default router;
