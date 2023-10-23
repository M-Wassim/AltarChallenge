"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/paymentRoutes.ts
const express = require("express");
const paymentController_1 = require("../controllers/paymentController");
const router = express.Router();
router.post("/", paymentController_1.createPayment);
router.get("/", paymentController_1.getAllPayments);
router.delete("/:id", paymentController_1.deletePayment);
exports.default = router;
