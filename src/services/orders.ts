import { IOrderAll } from '../interfaces/orders';
import orderModels from '../models/orders';

const getAllOrders = async ():Promise<IOrderAll[]> => {
  const result = await orderModels.getAllOrders();
  return result;
};

export default {
  getAllOrders,
};