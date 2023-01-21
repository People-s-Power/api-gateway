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
import { Model } from 'mongoose';
import { UserDocument } from 'src/user/entity/user.schema';
import { CreateOrgDTO, StaffRoleEnum } from './schema/organization.dto';
import { organizationDocument, orgnaization } from './schema/organization.schema';
export declare class OrganizationService {
    private readonly OrganizationModel;
    private readonly UserModel;
    constructor(OrganizationModel: Model<organizationDocument>, UserModel: Model<UserDocument>);
    getOrganizations(): Promise<organizationDocument[]>;
    getOrg(id: string): Promise<organizationDocument>;
    userOrgs(id: string): Promise<(orgnaization & import("mongoose").Document<any, any, any> & {
        _id: any;
        _doc: any;
    } & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createOrg(payload: CreateOrgDTO, user: UserDocument): Promise<organizationDocument>;
    updateOrganization(data: any, operatorId: any): Promise<orgnaization & import("mongoose").Document<any, any, any> & {
        _id: any;
        _doc: any;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateImage(image: any, orgId: any): Promise<organizationDocument>;
    createOperator(role: StaffRoleEnum, userId: any, orgId: any, operatorId: any): Promise<orgnaization & import("mongoose").Document<any, any, any> & {
        _id: any;
        _doc: any;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteOperator(orgId: any, user: any, operatorId: any): Promise<orgnaization & import("mongoose").Document<any, any, any> & {
        _id: any;
        _doc: any;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
