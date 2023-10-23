// src/routes/paymentRoutes.ts
const express = require("express");
import {
  createPayment,
  getAllPayments,
  deletePayment,
} from "../controllers/paymentController";

const router = express.Router();

router.post("/", createPayment);
router.get("/", getAllPayments);

router.delete("/:id", deletePayment);

export default router;
