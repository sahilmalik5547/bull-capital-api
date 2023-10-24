// order.schema.ts
import { Schema, Document } from 'mongoose';

export const OrderSchema = new Schema({
  symbol: { type: String, required: true },
  quantity: { type: Number, required: true },
  buyPrice: { type: Number, required: true },
  userId: { type: String, required: true },
  buyDate: { type: Date, required: true, default:new Date().getTime() },
  createdAt: { type: Date, required: true, default:new Date().getTime() },
  updateAt: { type: Date, required: true, default:new Date().getTime() },
});

export interface Order extends Document {
  symbol: string;
  quantity: number;
  buyPrice: number;
  userId:string;
  buyDate:Date;
  createdAt:Date;
  updatedAt:Date;
}
