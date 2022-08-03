import { Router } from 'express';
import productController from '../controllers/product.controller';

const product = Router();

product.post('/', productController.createProduct);

export default product;