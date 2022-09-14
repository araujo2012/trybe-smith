import express from 'express';
import productsController from '../controllers/products';

const productsRoutes = express.Router();

productsRoutes.post('/', productsController.newProduct);
productsRoutes.get('/', productsController.getAllProducts);

export default productsRoutes;