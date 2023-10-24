import { OrderService } from './order.service';
import { Order } from './order.interface';
import { CreateOrderDto, UpdateOrderDto } from './order.dto';
export declare class OrderController {
    private readonly ordersService;
    constructor(ordersService: OrderService);
    getAllOrders(): Promise<Order[]>;
    getOrders(where: Object, project: Object): Promise<Order[]>;
    getOrderById(orderId: string): Promise<Order>;
    createOrder(createOrderDto: CreateOrderDto): Promise<Order>;
    updateOrder(orderId: string, updateOrderDto: UpdateOrderDto): Promise<Order>;
    deleteOrder(orderId: string): Promise<Order>;
}
