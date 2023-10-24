// transactions.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';
import { TransactionService } from './transaction.service';
import { Transaction } from './transaction.interface';
import { CreateTransactionDto, UpdateTransactionDto } from './transaction.dto';

@ApiTags('transactions') // Swagger tag for grouping
@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionsService: TransactionService) {}

  @ApiOperation({ summary: 'Get all transactions' })
  @Get()
  getAllTransactions(): Promise<Transaction[]> {
    return this.transactionsService.getAllTransactions();
  }

  @ApiOperation({ summary: 'Get transaction by ID' })
  @ApiParam({ name: 'transactionId', description: 'Transaction ID' })
  @Get(':transactionId')
  getTransactionById(@Param('transactionId') transactionId: string): Promise<Transaction> {
    return this.transactionsService.getTransactionById(transactionId);
  }

  @ApiOperation({ summary: 'Create a new transaction' })
  @ApiBody({ type: CreateTransactionDto })
  @Post()
  createTransaction(@Body() createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    return this.transactionsService.createTransaction(createTransactionDto);
  }

  @ApiOperation({ summary: 'Update an existing transaction' })
  @ApiParam({ name: 'transactionId', description: 'Transaction ID' })
  @ApiBody({ type: UpdateTransactionDto })
  @Put(':transactionId')
  updateTransaction(@Param('transactionId') transactionId: string, @Body() updateTransactionDto: UpdateTransactionDto): Promise<Transaction> {
    return this.transactionsService.updateTransaction(transactionId, updateTransactionDto);
  }

  @ApiOperation({ summary: 'Delete a transaction by ID' })
  @ApiParam({ name: 'transactionId', description: 'Transaction ID' })
  @Delete(':transactionId')
  deleteTransaction(@Param('transactionId') transactionId: string): Promise<Transaction> {
    return this.transactionsService.deleteTransaction(transactionId);
  }
}
