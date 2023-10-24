import { Model } from 'mongoose';
import { CreateOrderDto, UpdateOrderDto } from './order.dto';
import { Order } from './order.interface';
export declare class OrderService {
    private readonly orderModel;
    constructor(orderModel: Model<Order>);
    getOrders(match: Object, project: Object): Promise<Order[]>;
    getAllOrders(): Promise<Order[]>;
    getOrderById(orderId: string): Promise<Order>;
    createOrder(createOrderDto: CreateOrderDto): Promise<Order>;
    updateOrder(orderId: string, updateOrderDto: UpdateOrderDto): Promise<Order>;
    deleteOrder(orderId: string): Promise<Order>;
}
