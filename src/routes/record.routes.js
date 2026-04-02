import express from "express";
import * as ctrl from "../controllers/record.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";
import { authorizeRoles } from "../middleware/role.middleware.js";
import { validateRecord } from "../validations/record.validation.js";

const router = express.Router();

router.post("/", verifyToken, authorizeRoles("admin"), validateRecord, ctrl.create);
router.get("/", verifyToken, authorizeRoles("admin", "analyst", "viewer"), ctrl.getAll);
router.put("/:id", verifyToken, authorizeRoles("admin"), validateRecord, ctrl.update);
router.delete("/:id", verifyToken, authorizeRoles("admin"), ctrl.remove);

export default router;
