import express from 'express';
import product from './routes/product.route';
import user from './routes/user.route';

const app = express();

app.use(express.json());

app.use('/products', product);

app.use('/users', user);

export default app;

//
