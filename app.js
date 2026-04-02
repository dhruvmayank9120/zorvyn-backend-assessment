import express from "express";
import cors from "cors";
import morgan from "morgan";

//Routes
import authRoutes from "./src/routes/auth.routes.js";
import recordRoutes from "./src/routes/record.routes.js";
import dashboardRoutes from "./src/routes/dashboard.routes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/records", recordRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
  res.send("zorvyn API is running...");
});

export default app;
