import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProductAdded, IProductReturned } from '../interfaces/products';

const newProduct = async (name: string, amount: number):Promise<IProductAdded> => {
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
  const [result] = await connection.execute<IProductReturned[]>(query);
  return result;
};

export default {
  newProduct,
  getAllProducts,
};
