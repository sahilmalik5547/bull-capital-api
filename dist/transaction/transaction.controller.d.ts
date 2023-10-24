import { TransactionService } from './transaction.service';
import { Transaction } from './transaction.interface';
import { CreateTransactionDto, UpdateTransactionDto } from './transaction.dto';
export declare class TransactionController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionService);
    getAllTransactions(): Promise<Transaction[]>;
    getTransactionById(transactionId: string): Promise<Transaction>;
    createTransaction(createTransactionDto: CreateTransactionDto): Promise<Transaction>;
    updateTransaction(transactionId: string, updateTransactionDto: UpdateTransactionDto): Promise<Transaction>;
    deleteTransaction(transactionId: string): Promise<Transaction>;
}
