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
import { UserDocument } from 'src/user/entity/user.schema';
import { IEndorsement } from '../dto/campaign.interface';
export type CampaignDocument = Campaign & Document & {
    _doc: any;
};
export type ViewDocument = View & Document;
export declare class Campaign {
    title: string;
    image: string;
    aim: string;
    target: string;
    body: string;
    slug: string;
    excerpt: string;
    status: string;
    featured: boolean;
    authorId: string;
    authorName: string;
    authorImg: string;
    createdAt: Date;
    updatedAt: Date;
    addedFrom: string;
    category: string;
    endorsements: IEndorsement[];
    endorserIds: string[];
    numberOfPaidEndorsementCount: number;
    numberOfPaidViewsCount: number;
    likes: UserDocument[];
    likeCount: number;
    promoted: boolean;
    views: any[];
    region: string;
}
export declare class View {
    user: UserDocument;
}
export declare const ViewSchema: import("mongoose").Schema<View, import("mongoose").Model<View, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, View>;
export declare const CampaignSchema: import("mongoose").Schema<Campaign, import("mongoose").Model<Campaign, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Campaign>;
