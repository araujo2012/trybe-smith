import { Request, Response, NextFunction } from 'express';
import { ILogin } from '../interfaces/login';
import userModel from '../models/users';
import token from '../utils/token';

const missingUsername = { message: '"username" is required' };
const missingPassword = { message: '"password" is required' };
const invalidLogin = { message: 'Username or password invalid' };

const hasUsername = (req: Request<unknown, unknown, ILogin>, res: Response, next: NextFunction) => {
  console.log('hasusername');
  
  const { username } = req.body;
  if (!username) return res.status(400).json(missingUsername);
  next();
};

const hasPassword = (req: Request<unknown, unknown, ILogin>, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) return res.status(400).json(missingPassword);
  next();
};

const isValidLogin = async (
  req: Request<unknown, unknown, ILogin>,
  res: Response,
) => {
  const { username, password } = req.body;
  const result = await userModel.getUserByUsername(username);
  console.log('login', result);
  
  if (result.length === 0) return res.status(401).json(invalidLogin);
  if (result[0].password !== password) return res.status(401).json(invalidLogin);
  return res.status(200).json(token);
};

export {
  hasUsername,
  hasPassword,
  isValidLogin,
};