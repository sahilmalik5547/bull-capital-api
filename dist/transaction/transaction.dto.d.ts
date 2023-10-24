export declare class CreateTransactionDto {
    readonly product: string;
    readonly amount: number;
    readonly paymentMethod: string;
}
export declare class UpdateTransactionDto {
    readonly product?: string;
    readonly amount?: number;
    readonly paymentMethod?: string;
}
