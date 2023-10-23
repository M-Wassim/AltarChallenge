"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/paymentRoutes.ts
const express = require("express");
const matrixController_1 = require("../controllers/matrixController");
const router = express.Router();
router.get("", matrixController_1.getMatrix);
exports.default = router;
