import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProduct, IProductReturned } from '../interfaces/products';

const newProduct = async (name: string, amount: string):Promise<IProduct> => {
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  return {
    id: result.insertId,
    name,
    amount,
  };
};

const getAllProducts = async ():Promise<IProductReturned[]> => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [result] = await connection.execute(query);
  return result as IProductReturned[];
};

export default {
  newProduct,
  getAllProducts,
};
