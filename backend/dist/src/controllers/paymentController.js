"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePayment = exports.getAllPayments = exports.createPayment = void 0;
let payments = [];
let nextId = 1;
const createPayment = (req, res) => {
    console.log(req);
    const newPayment = req.body;
    console.log(newPayment);
    newPayment.id = nextId++;
    payments.push(newPayment);
    res.status(201).json(newPayment);
};
exports.createPayment = createPayment;
const getAllPayments = (req, res) => {
    res.json(payments);
};
exports.getAllPayments = getAllPayments;
const deletePayment = (req, res) => {
    const paymentId = parseInt(req.params.id);
    payments = payments.filter((payment) => payment.id !== paymentId);
    res.status(204).send();
};
exports.deletePayment = deletePayment;
