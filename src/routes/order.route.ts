import { Router } from 'express';
import orderController from '../controllers/order.controller';

const order = Router();

order.route('/')
  .get(orderController.getAllOrders);

export default order;