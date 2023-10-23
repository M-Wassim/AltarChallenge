// src/routes/paymentRoutes.ts
const express = require("express");
import { getMatrix } from "../controllers/matrixController";

const router = express.Router();

router.get("", getMatrix);

export default router;
