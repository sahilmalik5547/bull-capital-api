// order.schema.ts
import { Schema, Document } from 'mongoose';

export const TransactionSchema = new Schema({
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
});

export interface Transaction extends Document {
  product: string;
  quantity: number;
  totalPrice: number;
}
