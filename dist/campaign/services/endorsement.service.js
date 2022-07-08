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
exports.EndorsementService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../../user/entity/user.schema");
const campaign_gateway_1 = require("../gateway/campaign.gateway");
const campaign_schema_1 = require("../schema/campaign.schema");
const endorsement_schema_1 = require("../schema/endorsement.schema");
const microservices_1 = require("@nestjs/microservices");
let EndorsementService = class EndorsementService {
    constructor(client, userModel, endorsementModel, CampaignModel, campaignGateway) {
        this.client = client;
        this.userModel = userModel;
        this.endorsementModel = endorsementModel;
        this.CampaignModel = CampaignModel;
        this.campaignGateway = campaignGateway;
    }
    async create(data, user) {
        const { campaign, body } = data;
        try {
            let campaign1 = await this.CampaignModel.findById(campaign);
            const endorsers = campaign1.endorserIds;
            const endorser = endorsers.find((item) => item.toString() === user.id.toString());
            if (endorser)
                throw new Error('User already Endorsed');
            campaign1 = await this.CampaignModel.findOneAndUpdate({ _id: campaign }, { $addToSet: { endorserIds: user.id } }, { new: true });
            const campEndorsementsCount = await this.endorsementModel.find({ campaign: campaign }).count();
            const numberOfPaidEndorsementCount = campaign1.numberOfPaidEndorsementCount;
            if (numberOfPaidEndorsementCount <= campEndorsementsCount) {
                throw new common_1.BadRequestException(`Can't endorse campaign right now`);
            }
            const endorsement = await this.endorsementModel.create({
                campaign,
                body,
                author: user.id,
            });
            campaign1 = await this.CampaignModel.findOneAndUpdate({ _id: campaign }, { $addToSet: { endorsements: endorsement } }, { new: true });
            await this.campaignGateway.endorsedCampaign({
                campaignTitle: campaign1.title,
                user,
            });
            const author = await this.userModel.findById(campaign1.author);
            const endorserName = user.name;
            const mailPayload = {
                author,
                endorserName,
                campaign: campaign1
            };
            this.client.emit('campaign-endorsed', mailPayload);
            return endorsement;
        }
        catch (error) {
            throw error;
        }
    }
    async findAll() {
        try {
            const endorsements = await this.endorsementModel
                .find()
                .populate('author', 'id firstName lastName');
            return endorsements;
        }
        catch (error) {
            throw error;
        }
    }
    async findByCampaign(campaign) {
        try {
            const endorsements = await this.endorsementModel
                .find({ campaign })
                .populate('author', 'id firstName lastName image');
            return endorsements;
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        try {
            const endorsements = await this.endorsementModel
                .findById(id)
                .populate('author', 'id firstName lastName');
            return endorsements;
        }
        catch (error) {
            throw error;
        }
    }
    async update(data) {
        try {
            const endorsement = await this.endorsementModel.findByIdAndUpdate(data.id, data, { new: true });
            return endorsement;
        }
        catch (error) {
            throw error;
        }
    }
    async like(data, user) {
        var _a;
        let endorsement = await this.endorsementModel.findById(data.id);
        if ((_a = endorsement === null || endorsement === void 0 ? void 0 : endorsement.likes) === null || _a === void 0 ? void 0 : _a.includes(user.id)) {
            return await this.unLike(data, user);
        }
        else
            try {
                endorsement = await this.endorsementModel.findByIdAndUpdate(data.id, { $addToSet: { likes: user === null || user === void 0 ? void 0 : user.id } }, { new: true });
                return true;
            }
            catch (error) {
                throw error;
            }
    }
    async unLike(data, user) {
        try {
            await this.endorsementModel.findByIdAndUpdate(data.id, { $pull: { likes: user === null || user === void 0 ? void 0 : user.id } }, { new: true });
            return false;
        }
        catch (error) {
            throw error;
        }
    }
    async delete(id) {
        try {
            const endorsement = await this.endorsementModel.findById(id);
            if (!id)
                throw new common_1.NotFoundException('No Record found');
            await this.CampaignModel.updateOne({ _id: endorsement.campaign }, { $pull: { endorsements: id } });
            endorsement.remove();
            return endorsement;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteMany() {
        try {
            const res = await this.endorsementModel.deleteMany();
            return res.deletedCount;
        }
        catch (error) {
            throw error;
        }
    }
};
EndorsementService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('MAIL_SERVICE')),
    __param(1, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(2, (0, mongoose_1.InjectModel)(endorsement_schema_1.Endorsement.name)),
    __param(3, (0, mongoose_1.InjectModel)(campaign_schema_1.Campaign.name)),
    __metadata("design:paramtypes", [microservices_1.ClientProxy,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        campaign_gateway_1.CampaignGateway])
], EndorsementService);
exports.EndorsementService = EndorsementService;
//# sourceMappingURL=endorsement.service.js.map