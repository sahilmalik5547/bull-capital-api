import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TransactionModule } from './transaction/transaction.module';
import { OrderModule } from './order/order.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://mss:NyeXwZm65rtsRKwY@cluster0.tgegjro.mongodb.net/trading?retryWrites=true&w=majority', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  }),
  UserModule, TransactionModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
