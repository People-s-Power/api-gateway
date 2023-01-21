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
import { Document } from 'mongoose';
import { User } from 'src/user/entity/user.schema';
import { Campaign } from './campaign.schema';
export type EndorsementDocument = Endorsement & Document;
export declare class Endorsement {
    author: Record<string, User>;
    campaign: Record<string, Campaign>;
    likes: User[] | string[];
    body: string;
    createdAt: Date;
    updatedAt: Date;
    likeCount: number;
}
export declare const EndorsementSchema: import("mongoose").Schema<Endorsement, import("mongoose").Model<Endorsement, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Endorsement>;
