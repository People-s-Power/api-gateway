"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportModule = void 0;
const common_1 = require("@nestjs/common");
const report_controller_1 = require("./report.controller");
const microservices_1 = require("@nestjs/microservices");
const config_1 = require("../utils/config");
const report_service_1 = require("./report.service");
const mongoose_1 = require("@nestjs/mongoose");
const reportRMQ_schema_1 = require("./schema/reportRMQ.schema");
let ReportModule = class ReportModule {
};
ReportModule = __decorate([
    (0, common_1.Module)({
        providers: [report_service_1.ReportService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: reportRMQ_schema_1.ReportRMQ.name, schema: reportRMQ_schema_1.ReportSchemaRMQ },
            ]),
            microservices_1.ClientsModule.register([
                {
                    name: 'REPORT_SERVICE',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: [config_1.default.RMQ_URL],
                        queue: 'report_queue',
                        noAck: false,
                        queueOptions: {
                            durable: false
                        },
                    },
                },
            ])
        ],
        controllers: [report_controller_1.ReportController]
    })
], ReportModule);
exports.ReportModule = ReportModule;
//# sourceMappingURL=report.module.js.map