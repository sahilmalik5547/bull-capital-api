import { Document } from 'mongoose';
export interface Transaction {
    product: string;
    amount: number;
    paymentMethod: string;
}
export type TransactionDocument = Transaction & Document;
