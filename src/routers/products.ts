import express from 'express';
import productsController from '../controllers/products';
import { hasAmount, hasName } from '../middlewares/products';

const productsRoutes = express.Router();

productsRoutes.post('/', hasName, hasAmount, productsController.newProduct);
productsRoutes.get('/', productsController.getAllProducts);

export default productsRoutes;