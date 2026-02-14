import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import profileRoutes from "./routes/profile.js";
import achievementsRoutes from "./routes/achievements.js"
import educationRoutes from "./routes/education.js"
import technologiesRoutes from "./routes/technologies.js"
import experiencesRoutes from "./routes/experiences.js"
import softskillsRoutes from "./routes/softskills.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);
app.use("/api/profile", profileRoutes);
app.use("/api/achievements", achievementsRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/technologies", technologiesRoutes);
app.use("/api/experiences", experiencesRoutes);
app.use("/api/softskills", softskillsRoutes);


// Rodar localmente e não em produção
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Local: http://localhost:${PORT}`));
}

// em produção 

export default app;

