import express from 'express';
import product from './routes/product.route';

const app = express();

app.use(express.json());

app.use('/products', product);

export default app;

//
