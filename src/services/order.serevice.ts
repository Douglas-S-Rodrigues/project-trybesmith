import { Order } from '../interfaces/interface';
import orderModel from '../models/order.models';

const orderService = {
  async getAllOrders(): Promise<Order[]> {
    const order = await orderModel.getAllOrders();
    return order;
  },
};

export default orderService;