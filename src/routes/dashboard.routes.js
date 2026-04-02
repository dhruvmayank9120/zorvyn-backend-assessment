import express from "express";
import { getSummary } from "../controllers/dashboard.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";
import { authorizeRoles } from "../middleware/role.middleware.js";

const router = express.Router();

router.get("/summary", verifyToken, authorizeRoles("admin", "analyst"), getSummary);

export default router;