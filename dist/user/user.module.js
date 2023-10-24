"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_controller_1 = require("./user.controller");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    status: { type: Boolean, required: true, default: true },
    bankName: { type: String },
    ifscCode: { type: String },
    accountHolderName: { type: String },
    netBalance: { type: String },
    pan: { type: String },
    mobile: { type: Number },
    dob: { type: Date },
    createdAt: { type: Date, default: new Date().getTime() },
    updatedAt: { type: Date, default: new Date().getTime() },
    favrouiteSymbol: { type: Array }
});
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
        ],
        providers: [user_service_1.UserService],
        controllers: [user_controller_1.UserController]
    })
], UserModule);
//# sourceMappingURL=user.module.js.map