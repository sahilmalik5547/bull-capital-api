import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.entity';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(userDto: UserDto): Promise<User> {
    const createdUser = new this.userModel(userDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(username: string): Promise<User> {
    return this.userModel.findOne({ username }).exec();
  }

  async login(username: string, password: string): Promise<User | null> {
    return this.userModel.findOne({ username, password }).exec();
  }

  async update(username: string, userDto: UserDto): Promise<User> {
    return this.userModel.findOneAndUpdate({ username }, userDto, { new: true }).exec();
  }

  async delete(username: string): Promise<void> {
    await this.userModel.findOneAndDelete({ username }).exec();
  }
}
