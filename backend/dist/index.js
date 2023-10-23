"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const paymentRoutes_1 = __importDefault(require("./src/routes/paymentRoutes"));
const matrixRoutes_1 = __importDefault(require("./src/routes/matrixRoutes"));
const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;
// Parse JSON requests
app.use(bodyParser.json());
// Parse URL-encoded requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));
app.use("/matrix", matrixRoutes_1.default);
app.use("/payments", paymentRoutes_1.default);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
