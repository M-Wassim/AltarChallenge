export interface Payment {
  id: number;
  payment: string;
  amount: number;
  code: string;
  grid: string[][];
}

import { Request, Response } from "express";

let payments: Payment[] = [];
let nextId = 1;

export const createPayment = (req: Request, res: Response) => {
  const newPayment: Payment = req.body;

  newPayment.id = nextId++;
  payments.push(newPayment);
  res.status(201).json(newPayment);
};

export const getAllPayments = (req: Request, res: Response) => {
  res.json(payments);
};

export const deletePayment = (req: Request, res: Response) => {
  const paymentId = parseInt(req.params.id);
  payments = payments.filter((payment: Payment) => payment.id !== paymentId);
  res.status(204).send();
};
