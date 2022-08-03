import { Product } from '../interfaces/interface';
import ProductModel from '../models/product.models';

const productService = {
  async createProduct(data: Product): Promise<Product> {
    const result = await ProductModel.createProduct(data);
    return result;
  },
  async getAllProducts(): Promise<Product[]> {
    const products = await ProductModel.getAllProducts();
    return products;
  },
};

export default productService;