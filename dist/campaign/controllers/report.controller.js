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
exports.ReportCampController = void 0;
const common_1 = require("@nestjs/common");
const reportCamp_dto_1 = require("../schema/reportCamp.dto");
const reportCamp_service_1 = require("../services/reportCamp.service");
let ReportCampController = class ReportCampController {
    constructor(reportCampService) {
        this.reportCampService = reportCampService;
        this.logger = new common_1.Logger();
    }
    async getCampReports(param) {
        const { slug } = param;
        const results = await this.reportCampService.getReports(slug);
        return results;
    }
    getAllReports() {
        return this.reportCampService.getAllReports();
    }
    createReportPost(data) {
        return this.reportCampService.createReport(data);
    }
    resolveReportPut(param) {
        const { reportId } = param;
        return this.reportCampService.resolveReport(reportId);
    }
};
__decorate([
    (0, common_1.Get)('/:slug'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReportCampController.prototype, "getCampReports", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReportCampController.prototype, "getAllReports", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reportCamp_dto_1.reportDTO]),
    __metadata("design:returntype", void 0)
], ReportCampController.prototype, "createReportPost", null);
__decorate([
    (0, common_1.Put)('/:reportId'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReportCampController.prototype, "resolveReportPut", null);
ReportCampController = __decorate([
    (0, common_1.Controller)('api/v3/reports'),
    __metadata("design:paramtypes", [reportCamp_service_1.ReportCampService])
], ReportCampController);
exports.ReportCampController = ReportCampController;
//# sourceMappingURL=report.controller.js.map