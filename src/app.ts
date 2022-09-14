import express from 'express';
import ordersRoutes from './routers/orders';
import productsRoutes from './routers/products';
import usersRoutes from './routers/users';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/orders', ordersRoutes);

export default app;
