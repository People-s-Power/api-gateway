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
exports.OrgsController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
let OrgsController = class OrgsController {
    constructor(client) {
        this.client = client;
    }
    createOrg(req) {
        this.client.emit('create-org', req.user._id);
        return 'sucess';
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrgsController.prototype, "createOrg", null);
OrgsController = __decorate([
    (0, common_1.Controller)('api/v3/orgs'),
    __param(0, (0, common_1.Inject)('ORG_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], OrgsController);
exports.OrgsController = OrgsController;
//# sourceMappingURL=orgs.controller.js.map