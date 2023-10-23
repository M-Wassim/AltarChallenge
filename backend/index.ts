import { Request, Response } from "express";
const bodyParser = require("body-parser");
import paymentRoutes from "./src/routes/paymentRoutes";
import matrixRoutes from "./src/routes/matrixRoutes";
const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ origin: true, credentials: true }));
app.use("/matrix", matrixRoutes);
app.use("/payments", paymentRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
