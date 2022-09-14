import { IOrderAll } from '../interfaces/orders';
import connection from './connection';

const getAllOrders = async ():Promise<IOrderAll[]> => {
  const query = `SELECT orders.id, orders.userId, JSON_ARRAYAGG(products.id) AS productsIds
    FROM Trybesmith.Orders as orders
    INNER JOIN Trybesmith.Products as products ON orders.id = products.orderId
    GROUP BY orders.id ORDER BY orders.userId ASC;`;
  const [result] = await connection.execute<IOrderAll[]>(query);
  return result;
};

export default {
  getAllOrders,
};