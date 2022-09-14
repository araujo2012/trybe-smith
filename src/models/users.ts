import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import token from '../utils/token';

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

export default {
  newUser,
};