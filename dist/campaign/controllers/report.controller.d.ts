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
import { Logger } from '@nestjs/common';
import { reportDTO } from '../schema/reportCamp.dto';
import { ReportCampService } from '../services/reportCamp.service';
export declare class ReportCampController {
    private readonly reportCampService;
    logger: Logger;
    constructor(reportCampService: ReportCampService);
    getCampReports(param: any): Promise<(import("../schema/reportCamp.schema").ReportCamp & import("mongoose").Document<any, any, any> & {
        _id: any;
        _doc: any;
    } & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getAllReports(): Promise<(import("../schema/reportCamp.schema").ReportCamp & import("mongoose").Document<any, any, any> & {
        _id: any;
        _doc: any;
    } & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createReportPost(data: reportDTO): Promise<import("../schema/reportCamp.schema").ReportCamp & import("mongoose").Document<any, any, any> & {
        _id: any;
        _doc: any;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    resolveReportPut(param: any): Promise<any>;
}
