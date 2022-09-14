import { RowDataPacket } from 'mysql2';

export type IProduct = {
  name: string;
  amount: number;
};

export type IProductAdded = {
  id?: number;
} & IProduct;

export type IProductReturned = IProduct & RowDataPacket;