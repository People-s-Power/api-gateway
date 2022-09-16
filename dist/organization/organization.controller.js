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
exports.OrganizationController = void 0;
const common_1 = require("@nestjs/common");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const cloudinary_1 = require("../utils/cloudinary");
const organization_service_1 = require("./organization.service");
let OrganizationController = class OrganizationController {
    constructor(organizationService) {
        this.organizationService = organizationService;
        this.logger = new common_1.Logger();
    }
    async uploadImage(data, param) {
        const image = await (0, cloudinary_1.cloudinaryUpload)(data.image).catch((err) => {
            console.log(err);
            throw new Error('Problem with uploading image');
        });
        const payload = {
            img: image,
            orgId: param.orgId
        };
        return this.organizationService.updateImage(image, param.orgId);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)('/uploadimg/:orgId'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrganizationController.prototype, "uploadImage", null);
OrganizationController = __decorate([
    (0, common_1.Controller)('api/v3/organization'),
    __metadata("design:paramtypes", [organization_service_1.OrganizationService])
], OrganizationController);
exports.OrganizationController = OrganizationController;
//# sourceMappingURL=organization.controller.js.map