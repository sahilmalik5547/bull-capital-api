// orders.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';
import { OrderService } from './order.service';
import { Order } from './order.interface';
import { CreateOrderDto, UpdateOrderDto } from './order.dto';

@ApiTags('orders') // Swagger tag for grouping
@Controller('orders')
export class OrderController {
  constructor(private readonly ordersService: OrderService) {}

  @ApiOperation({ summary: 'Get all orders' })
  @Get()
  getAllOrders(): Promise<Order[]> {
    return this.ordersService.getAllOrders();
  }

  @ApiOperation({ summary: 'Get order array by match and projet' })
  @ApiParam({ name: 'project', description: 'Fields to be Project' })
  @ApiParam({ name: 'where', description: 'Match critria' })
  @Get('/find')
  getOrders(@Param('where') where: Object , @Param('project') project: Object): Promise<Order[]> {
    return this.ordersService.getOrders(where,project);
  }
  @ApiOperation({ summary: 'Get order by ID' })
  @ApiParam({ name: 'orderId', description: 'Order ID' })
  @Get(':orderId')
  getOrderById(@Param('orderId') orderId: string): Promise<Order> {
    return this.ordersService.getOrderById(orderId);
  }

  @ApiOperation({ summary: 'Create a new order' })
  @ApiBody({ type: CreateOrderDto })
  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.ordersService.createOrder(createOrderDto);
  }

  @ApiOperation({ summary: 'Update an existing order' })
  @ApiParam({ name: 'orderId', description: 'Order ID' })
  @ApiBody({ type: UpdateOrderDto })
  @Put(':orderId')
  updateOrder(@Param('orderId') orderId: string, @Body() updateOrderDto: UpdateOrderDto): Promise<Order> {
    return this.ordersService.updateOrder(orderId, updateOrderDto);
  }

  @ApiOperation({ summary: 'Delete an order by ID' })
  @ApiParam({ name: 'orderId', description: 'Order ID' })
  @Delete(':orderId')
  deleteOrder(@Param('orderId') orderId: string): Promise<Order> {
    return this.ordersService.deleteOrder(orderId);
  }
}
