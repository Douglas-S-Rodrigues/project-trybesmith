import { Router } from 'express';
import productController from '../controllers/product.controller';

const product = Router();

product.route('/')
  .post(productController.createProduct)
  .get(productController.getAllProducts);

export default product;