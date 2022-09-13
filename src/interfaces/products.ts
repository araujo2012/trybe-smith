export type IProduct = {
  name: string;
  amount: number;
};

export type IProductAdded = {
  id?: number;
} & IProduct;