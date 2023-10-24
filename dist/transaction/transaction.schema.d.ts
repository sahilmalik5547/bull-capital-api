/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Schema, Document } from 'mongoose';
export declare const TransactionSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    product: string;
    quantity: number;
    totalPrice: number;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    product: string;
    quantity: number;
    totalPrice: number;
}>> & import("mongoose").FlatRecord<{
    product: string;
    quantity: number;
    totalPrice: number;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export interface Transaction extends Document {
    product: string;
    quantity: number;
    totalPrice: number;
}
