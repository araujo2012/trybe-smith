import express from 'express';
import userController from '../controllers/users';

const usersRoutes = express.Router();

usersRoutes.post('/', userController.newUser);

export default usersRoutes;