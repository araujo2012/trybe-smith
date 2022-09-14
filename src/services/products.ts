import productModel from '../models/products';
import { IProduct, IProductReturned } from '../interfaces/products';

const newProduct = async (product: IProduct) => {
  const { name, amount } = product;
  const result = await productModel.newProduct(name, amount);
  return result;
};

const getAllProducts = async ():Promise<IProductReturned[]> => {
  const result = productModel.getAllProducts();
  return result;
};

export default {
  newProduct,
  getAllProducts,
};