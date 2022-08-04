import { Request, Response } from 'express';
import orderService from '../services/order.serevice';

const orderController = {
  async getAllOrders(req: Request, res: Response) {
    const order = await orderService.getAllOrders();
    return res.status(200).json(order);
  },
};

export default orderController;