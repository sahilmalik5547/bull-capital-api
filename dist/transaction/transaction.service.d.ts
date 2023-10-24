import { Model } from 'mongoose';
import { CreateTransactionDto, UpdateTransactionDto } from './transaction.dto';
import { Transaction } from './transaction.interface';
export declare class TransactionService {
    private readonly transactionModel;
    constructor(transactionModel: Model<Transaction>);
    getAllTransactions(): Promise<Transaction[]>;
    getTransactionById(transactionId: string): Promise<Transaction>;
    createTransaction(createTransactionDto: CreateTransactionDto): Promise<Transaction>;
    updateTransaction(transactionId: string, updateTransactionDto: UpdateTransactionDto): Promise<Transaction>;
    deleteTransaction(transactionId: string): Promise<Transaction>;
}
