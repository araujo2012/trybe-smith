import express from 'express';
import productsRoutes from './routers/products';
import usersRoutes from './routers/users';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', usersRoutes);

export default app;
