"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignSocketEnum = exports.CampaignStatusEnum = void 0;
var CampaignStatusEnum;
(function (CampaignStatusEnum) {
    CampaignStatusEnum["Active"] = "Active";
    CampaignStatusEnum["Pending"] = "Pending";
    CampaignStatusEnum["Finished"] = "Finished";
    CampaignStatusEnum["Draft"] = "Draft";
    CampaignStatusEnum["Promoted"] = "Promoted";
})(CampaignStatusEnum = exports.CampaignStatusEnum || (exports.CampaignStatusEnum = {}));
var CampaignSocketEnum;
(function (CampaignSocketEnum) {
    CampaignSocketEnum["Created"] = "created-campaign";
    CampaignSocketEnum["Endorsed"] = "endorsed-campaign";
    CampaignSocketEnum["Liked"] = "liked-campaign";
    CampaignSocketEnum["Shared"] = "shared-campaign";
    CampaignSocketEnum["Promoted"] = "promoted-campaign";
    CampaignSocketEnum["Deleted"] = "deleted-campaign";
    CampaignSocketEnum["Get"] = "get-campaigns";
    CampaignSocketEnum["Send"] = "send-endorsements";
})(CampaignSocketEnum = exports.CampaignSocketEnum || (exports.CampaignSocketEnum = {}));
//# sourceMappingURL=campaign.interface.js.map