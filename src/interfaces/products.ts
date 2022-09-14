import { RowDataPacket } from 'mysql2';

export type IProduct = {
  id?: number;
  name: string;
  amount: number;
};

export type IProductReturned = IProduct & RowDataPacket;