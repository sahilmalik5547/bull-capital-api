import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDto, UpdateOrderDto } from './order.dto';
import { Order } from './order.interface';

@Injectable()
export class OrderService {
    constructor(@InjectModel('Order') private readonly orderModel: Model<Order>) {}

    async getOrders(match:Object,project:Object): Promise<Order[]> {
      return this.orderModel.find(match,project).exec();
    }
    async getAllOrders(): Promise<Order[]> {
      return this.orderModel.find().exec();
    }
  
    async getOrderById(orderId: string): Promise<Order> {
      return this.orderModel.findById(orderId).exec();
    }
  
    async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
      const createdOrder = new this.orderModel(createOrderDto);
      return createdOrder.save();
    }
  
    async updateOrder(orderId: string, updateOrderDto: UpdateOrderDto): Promise<Order> {
      return this.orderModel.findByIdAndUpdate(orderId, updateOrderDto, { new: true }).exec();
    }
  
    async deleteOrder(orderId: string): Promise<Order> {
      return this.orderModel.findByIdAndDelete(orderId).exec();
    }}
