"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GqlUser = exports.ResGql = exports.CurrentUser = exports.GQLGuard = exports.GQLoginGuard = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const passport_1 = require("@nestjs/passport");
let GQLoginGuard = class GQLoginGuard extends (0, passport_1.AuthGuard)('local') {
    getRequest(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        return ctx.getContext().req;
    }
    async canActivate(context) {
        const result = (await super.canActivate(context));
        const request = context.switchToHttp().getRequest();
        await super.logIn(request);
        return result;
    }
};
GQLoginGuard = __decorate([
    (0, common_1.Injectable)()
], GQLoginGuard);
exports.GQLoginGuard = GQLoginGuard;
let GQLGuard = class GQLGuard {
    async canActivate(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        const request = ctx.getContext().req;
        console.log(request.session);
        return await request.user;
    }
};
GQLGuard = __decorate([
    (0, common_1.Injectable)()
], GQLGuard);
exports.GQLGuard = GQLGuard;
exports.CurrentUser = (0, common_2.createParamDecorator)((data, context) => {
    const ctx = graphql_1.GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
});
exports.ResGql = (0, common_2.createParamDecorator)((data, [root, args, ctx, info]) => ctx.res);
exports.GqlUser = (0, common_2.createParamDecorator)((data, [root, args, ctx, info]) => ctx.req && ctx.req.user);
//# sourceMappingURL=graphql.guard.js.map