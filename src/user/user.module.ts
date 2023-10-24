import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  status: { type: Boolean, required: true, default:true },
  bankName:{type:String},
  ifscCode:{type:String},
  accountHolderName:{type:String},
  netBalance:{type:String},
  pan:{type:String},
  mobile:{type:Number},
  dob:{type:Date},
  createdAt:{type:Date, default: new Date().getTime()},
  updatedAt:{type:Date, default: new Date().getTime()},
  favrouiteSymbol:{type:Array}
});

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), // Add this line
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
