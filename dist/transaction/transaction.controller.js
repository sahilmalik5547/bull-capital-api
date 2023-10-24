"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const transaction_service_1 = require("./transaction.service");
const transaction_dto_1 = require("./transaction.dto");
let TransactionController = class TransactionController {
    constructor(transactionsService) {
        this.transactionsService = transactionsService;
    }
    getAllTransactions() {
        return this.transactionsService.getAllTransactions();
    }
    getTransactionById(transactionId) {
        return this.transactionsService.getTransactionById(transactionId);
    }
    createTransaction(createTransactionDto) {
        return this.transactionsService.createTransaction(createTransactionDto);
    }
    updateTransaction(transactionId, updateTransactionDto) {
        return this.transactionsService.updateTransaction(transactionId, updateTransactionDto);
    }
    deleteTransaction(transactionId) {
        return this.transactionsService.deleteTransaction(transactionId);
    }
};
exports.TransactionController = TransactionController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all transactions' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "getAllTransactions", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get transaction by ID' }),
    (0, swagger_1.ApiParam)({ name: 'transactionId', description: 'Transaction ID' }),
    (0, common_1.Get)(':transactionId'),
    __param(0, (0, common_1.Param)('transactionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "getTransactionById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new transaction' }),
    (0, swagger_1.ApiBody)({ type: transaction_dto_1.CreateTransactionDto }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transaction_dto_1.CreateTransactionDto]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "createTransaction", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update an existing transaction' }),
    (0, swagger_1.ApiParam)({ name: 'transactionId', description: 'Transaction ID' }),
    (0, swagger_1.ApiBody)({ type: transaction_dto_1.UpdateTransactionDto }),
    (0, common_1.Put)(':transactionId'),
    __param(0, (0, common_1.Param)('transactionId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, transaction_dto_1.UpdateTransactionDto]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "updateTransaction", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete a transaction by ID' }),
    (0, swagger_1.ApiParam)({ name: 'transactionId', description: 'Transaction ID' }),
    (0, common_1.Delete)(':transactionId'),
    __param(0, (0, common_1.Param)('transactionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "deleteTransaction", null);
exports.TransactionController = TransactionController = __decorate([
    (0, swagger_1.ApiTags)('transactions'),
    (0, common_1.Controller)('transactions'),
    __metadata("design:paramtypes", [transaction_service_1.TransactionService])
], TransactionController);
//# sourceMappingURL=transaction.controller.js.map