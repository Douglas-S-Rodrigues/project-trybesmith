import { Request, Response } from 'express';
import productService from '../services/product.service';

const productController = {
  async createProduct(req: Request, res: Response) {
    const product = await productService.createProduct(req.body);
    return res.status(201).json(product);
  },
  async getAllProducts(_req: Request, res: Response) {
    const products = await productService.getAllProducts();
    return res.status(200).json(products);
  },
};

export default productController;