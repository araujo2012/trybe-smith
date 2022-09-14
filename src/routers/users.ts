import express from 'express';
import userController from '../controllers/users';
import { hasUsername,
  hasClasse,
  hasLevel,
  hasPassword } from '../middlewares/users';

const usersRoutes = express.Router();

usersRoutes.post('/', hasUsername, hasClasse, hasLevel, hasPassword, userController.newUser);

export default usersRoutes;