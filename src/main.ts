import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { OrderModule } from './order/order.module';
import { TransactionModule } from './transaction/transaction.module';
import { UserModule } from './user/user.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors: true});

  const options = new DocumentBuilder()
    .setTitle('Trading App')
    .setDescription('API documentation for Trading App')
    .setVersion('1.0')
    .addTag('trading')
    .build();

  const document = SwaggerModule.createDocument(app, options,{
    include:[OrderModule, TransactionModule,UserModule]
  });
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
