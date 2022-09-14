import express from 'express';
import orderController from '../controllers/orders';

const ordersRoutes = express.Router();

ordersRoutes.get('/', orderController.getAllOrders);

export default ordersRoutes;