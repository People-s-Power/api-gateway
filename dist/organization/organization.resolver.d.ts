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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { UserDocument } from 'src/user/entity/user.schema';
import { OrganizationService } from './organization.service';
import { organizationDocument } from './schema/organization.schema';
export declare class OrganizationResolver {
    private readonly organizationService;
    constructor(organizationService: OrganizationService);
    getOrganzations(): Promise<organizationDocument[]>;
    getOrganzation(Id: any): Promise<organizationDocument>;
    getUserOrganizations(Id: any): Promise<organizationDocument[]>;
    createOrg(payload: any, user: UserDocument): Promise<organizationDocument>;
    updateOrganization(payload: any, user: UserDocument): Promise<import("./schema/organization.schema").orgnaization & import("mongoose").Document<any, any, any> & {
        _id: any;
        _doc: any;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addOperator(payload: any, user: UserDocument): Promise<import("./schema/organization.schema").orgnaization & import("mongoose").Document<any, any, any> & {
        _id: any;
        _doc: any;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteOperator(payload: any, user: UserDocument): Promise<import("./schema/organization.schema").orgnaization & import("mongoose").Document<any, any, any> & {
        _id: any;
        _doc: any;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
