import express from 'express';
import loginRoutes from './routers/login';
import ordersRoutes from './routers/orders';
import productsRoutes from './routers/products';
import usersRoutes from './routers/users';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/orders', ordersRoutes);
app.use('/login', loginRoutes);

export default app;
