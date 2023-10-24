import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTransactionDto, UpdateTransactionDto } from './transaction.dto';
import { TransactionDocument, Transaction } from './transaction.interface';

@Injectable()
export class TransactionService {
    constructor(@InjectModel('Transaction') private readonly transactionModel: Model<Transaction>) {}
    async getAllTransactions(): Promise<Transaction[]> {
      return this.transactionModel.find().exec();
    }
  
    async getTransactionById(transactionId: string): Promise<Transaction> {
      return this.transactionModel.findById(transactionId).exec();
    }
  
    async createTransaction(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
      const createdTransaction = new this.transactionModel(createTransactionDto);
      return createdTransaction.save();
    }
  
    async updateTransaction(transactionId: string, updateTransactionDto: UpdateTransactionDto): Promise<Transaction> {
      return this.transactionModel.findByIdAndUpdate(transactionId, updateTransactionDto, { new: true }).exec();
    }
  
    async deleteTransaction(transactionId: string): Promise<Transaction> {
      return this.transactionModel.findByIdAndDelete(transactionId).exec();
    }}
