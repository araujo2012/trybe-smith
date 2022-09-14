import { Request, Response } from 'express';
import { IProduct } from '../interfaces/products';
import productsService from '../services/products';

const newProduct = async (req: Request<unknown, unknown, IProduct>, res: Response) => {
  const product = req.body;
  const result = await productsService.newProduct(product);
  return res.status(201).json(result);
};

const getAllProducts = async (req: Request, res: Response) => {
  const result = await productsService.getAllProducts();
  return res.status(200).json(result);
};

export default {
  newProduct,
  getAllProducts,
};