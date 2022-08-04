import { Order } from '../interfaces/interface';
import connection from './connection';

const orderModel = {
  async getAllOrders(): Promise<Order[]> {
    const sql = `
    SELECT o.userId, o.id, JSON_ARRAYAGG(p.id) as productsIds FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products AS p ON o.id = orderId GROUP BY o.id ORDER BY o.userId
    `;
    const [rows] = await connection.query(sql);
    return rows as Order[];
  },
};

export default orderModel;