// order.interface.ts
import { Document } from 'mongoose';

export interface Order {
  symbol: string;
  quantity: number;
  buyPrice: number;
  userId:string;
  buyDate:Date;
}

export type OrderDocument = Order & Document;
