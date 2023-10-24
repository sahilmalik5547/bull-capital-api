export declare class CreateOrderDto {
    readonly symbol: string;
    readonly quantity: number;
    readonly buyPrice: number;
    readonly userId: string;
    readonly buyDate: Date;
}
export declare class UpdateOrderDto {
    readonly product?: string;
    readonly quantity?: number;
    readonly buyPrice?: number;
}
