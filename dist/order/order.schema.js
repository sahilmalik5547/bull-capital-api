"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = void 0;
const mongoose_1 = require("mongoose");
exports.OrderSchema = new mongoose_1.Schema({
    symbol: { type: String, required: true },
    quantity: { type: Number, required: true },
    buyPrice: { type: Number, required: true },
    userId: { type: String, required: true },
    buyDate: { type: Date, required: true, default: new Date().getTime() },
    createdAt: { type: Date, required: true, default: new Date().getTime() },
    updateAt: { type: Date, required: true, default: new Date().getTime() },
});
//# sourceMappingURL=order.schema.js.map