import { Request, Response } from 'express';
import orderService from '../services/orders';

const getAllOrders = async (_req: Request, res: Response) => {
  const result = await orderService.getAllOrders();
  return res.status(200).json(result);
};

export default {
  getAllOrders,
};