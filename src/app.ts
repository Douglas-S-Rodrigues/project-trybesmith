import express from 'express';
import product from './routes/product.route';
import user from './routes/user.route';
import order from './routes/order.route';

const app = express();

app.use(express.json());

app.use('/products', product);

app.use('/users', user);

app.use('/orders', order);

export default app;

//
