// transaction.dto.ts
export class CreateTransactionDto {
    readonly product: string;
    readonly amount: number;
    readonly paymentMethod: string;
  }
  
  export class UpdateTransactionDto {
    readonly product?: string;
    readonly amount?: number;
    readonly paymentMethod?: string;
  }
  