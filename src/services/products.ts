import productModel from '../models/products';
import { IProduct } from '../interfaces/products';

const newProduct = async (product: IProduct) => {
  const { name, amount } = product;
  const result = await productModel.newProduct(name, amount);
  return result;
};

export default {
  newProduct,
};