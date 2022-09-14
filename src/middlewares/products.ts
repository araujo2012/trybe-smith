import { Request, Response, NextFunction } from 'express';
import { IProduct } from '../interfaces/products';

const missingName = { message: '"name" is required' };
const nameIsString = { message: '"name" must be a string' };
const nameSize = { message: '"name" length must be at least 3 characters long' };
const missingAmount = { message: '"amount" is required' };
const amountIsString = { message: '"amount" must be a string' };
const amountSize = { message: '"amount" length must be at least 3 characters long' };

const hasName = (req: Request<unknown, unknown, IProduct>, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name) return res.status(400).json(missingName);
  if (typeof name !== 'string') return res.status(422).json(nameIsString);
  if (name.length < 3) return res.status(422).json(nameSize);
  next();
};

const hasAmount = (req: Request<unknown, unknown, IProduct>, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  if (!amount) return res.status(400).json(missingAmount);
  if (typeof amount !== 'string') return res.status(422).json(amountIsString);
  if (amount.length < 3) return res.status(422).json(amountSize);
  next();
};

export {
  hasName,
  hasAmount,
};