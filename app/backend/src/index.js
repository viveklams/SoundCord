import express from "express";
import dotenv from "dotenv";

import userRoutes from "./routes/user.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import authRoutes from "./routes/auth.routes.js";
import songRoutes from "./routes/songs.routes.js";
import albumRoutes from "./routes/albums.routes.js";
import statRoutes from "./routes/stats.routes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use("api/admin", adminRoutes);
app.use("api/user", userRoutes);
app.use("api/auth", authRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/stats", statRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port" + PORT);
});
