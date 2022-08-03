import { ResultSetHeader } from 'mysql2/promise';
import { Product } from '../interfaces/interface';
import connection from './connection';

const ProductModel = {
  async createProduct(data: Product): Promise<Product> {
    const { name, amount, orderId } = data;
    const sql = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)';
    const product = await connection.query<ResultSetHeader>(sql, [name, amount, orderId]);
    const [{ insertId }] = product;
    return { id: insertId, ...data };
  },
};

export default ProductModel;