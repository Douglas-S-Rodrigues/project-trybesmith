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
  async getAllProducts(): Promise<Product[]> {
    const sql = 'SELECT * FROM Trybesmith.Products';
    const [rows] = await connection.query(sql);
  
    return rows as Product[];
  },
};

export default ProductModel;
//