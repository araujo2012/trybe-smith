import { Request, Response, NextFunction } from 'express';

const missingUsername = { message: '"username" is required' };
const usernameIsString = { message: '"username" must be a string' };
const usernameSize = { message: '"username" length must be at least 3 characters long' };
const missingClasse = { message: '"classe" is required' };
const classeIsIsString = { message: '"classe" must be a string' };
const classeSize = { message: '"classe" length must be at least 3 characters long' };
const missingLevel = { message: '"level" is required' };
const levelIsNumber = { message: '"level" must be a number' };
const levelMin = { message: '"level" must be greater than or equal to 1' };
const missingPassword = { message: '"password" is required' };
const passwordIsString = { message: '"password" must be a string' };
const passwordSize = { message: '"password" length must be at least 8 characters long' };

const hasUsername = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  if (!username) return res.status(400).json(missingUsername);
  if (typeof username !== 'string') return res.status(422).json(usernameIsString);
  if (username.length < 3) return res.status(422).json(usernameSize); 
  next();
};

const hasClasse = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;
  if (!classe) return res.status(400).json(missingClasse);
  if (typeof classe !== 'string') return res.status(422).json(classeIsIsString);
  if (classe.length < 3) return res.status(422).json(classeSize);
  next();
};

const hasLevel = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  if (level === undefined) return res.status(400).json(missingLevel);
  if (typeof level !== 'number') return res.status(422).json(levelIsNumber);
  if (level < 1) return res.status(422).json(levelMin);
  next();
};

const hasPassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) return res.status(400).json(missingPassword);
  if (typeof password !== 'string') return res.status(422).json(passwordIsString);
  if (password.length < 8) return res.status(422).json(passwordSize);
  next();
};

export {
  hasUsername,
  hasClasse,
  hasLevel,
  hasPassword,
};