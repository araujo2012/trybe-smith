import { RowDataPacket } from 'mysql2';

export type IUserDefault = {
  username: string,
  classe: string,
  level: number,
  password: string,
};

export type IUser = {
  username: string,
  classe: string,
  level: number,
  password: string,
} & RowDataPacket;

export type IUserId = {
  id: number,
} & IUserDefault;