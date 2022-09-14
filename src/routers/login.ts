import express from 'express';
import { isValidLogin, hasUsername, hasPassword } from '../middlewares/login';

const loginRoutes = express.Router();

loginRoutes.post('/', hasUsername, hasPassword, isValidLogin);

export default loginRoutes;