import express from 'express';
import productsController from '../controllers/products';

const productsRoutes = express.Router();

productsRoutes.post('/', productsController.newProduct);

export default productsRoutes;