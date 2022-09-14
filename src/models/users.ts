import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import token from '../utils/token';
import { IUser } from '../interfaces/users';

const newUser = async (
  username: string,
  classe: string,
  level: number,
  password: string,
):Promise<{ token: string }> => {
  let query = 'INSERT INTO Trybesmith.Users (username, classe, level, password)';
  query += ' VALUES (?, ?, ?, ?)';
  await connection
    .execute<ResultSetHeader>(query, [username, classe, level, password]);
  return token;
};

const getUserByUsername = async (username: string) => {
  const query = 'SELECT * FROM Trybesmith.Users WHERE username = ?';
  const [result] = await connection.execute(query, [username]);
  return result as IUser[];
};

export default {
  newUser,
  getUserByUsername,
};