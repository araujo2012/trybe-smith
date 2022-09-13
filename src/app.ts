import express from 'express';
import productsRoutes from './routers/products';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);

export default app;
