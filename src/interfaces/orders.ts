import { RowDataPacket } from 'mysql2';

export type IOrder = {
  name: string;
  amount: number;
};

export type IOrderAll = IOrder & RowDataPacket;