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
import { AccountTypeEnum, StaffRoleEnum } from '../dto/user.dto';
import { Document } from 'mongoose';
export type UserDocument = User & Document & {
    _id: any;
    _doc: any;
};
export declare class User {
    name: string;
    googleId: string;
    facebookId: string;
    accountType: AccountTypeEnum;
    image: string;
    firstName: string;
    lastName: string;
    description: string;
    otherName: string;
    email: string;
    password: string;
    phone: string;
    emailToken: string;
    emailVerified: boolean;
    isActive: boolean;
    role: StaffRoleEnum;
    address: string;
    reps: User[];
    suppervisor: User;
    reportCount: number;
    applicantCount: number;
    bankName: string;
    accountNumber: string;
    accountName: string;
    country: string;
    state: string;
    city: string;
    lastSeen: Date;
    followers: string[];
    following: string[];
    orgOperating: string[];
    followersCount: number;
    followingCount: number;
    createdOrg: boolean;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User>;
