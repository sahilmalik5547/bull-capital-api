"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const order_module_1 = require("./order/order.module");
const transaction_module_1 = require("./transaction/transaction.module");
const user_module_1 = require("./user/user.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Trading App')
        .setDescription('API documentation for Trading App')
        .setVersion('1.0')
        .addTag('trading')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options, {
        include: [order_module_1.OrderModule, transaction_module_1.TransactionModule, user_module_1.UserModule]
    });
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map