import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
// import { JwtAuthGuard } from 'src/auth/guards/local.guard';
import { ReqWithUser } from 'src/typings';
import { CreateCampaignDTO, CreateCampaignOrgDTO, UpdateCampaignDTO } from '../dto/campaign.dto';
import { CampaignGateway } from '../gateway/campaign.gateway';
import {
  CampaignService,
  ISessionResponseData,
} from '../services/campaign.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('api/v3/campaign')
export class CampaignController {
  constructor(
    private readonly campaignService: CampaignService,
    private readonly campaignGateway: CampaignGateway,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() data: CreateCampaignDTO, @Req() req: ReqWithUser) {
    return this.campaignService.create(data, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/org/:orgId')
  createCampForOrg(@Body() data: CreateCampaignOrgDTO, @Param() param) {
    const { orgId } = param
    return this.campaignService.create(data, orgId);
  }


  @Get('session/:id')
  async getSession(
    @Param('id') id: string,
    @Req() req: Request,
  ): Promise<ISessionResponseData> {
    const campaign = await this.campaignService.updateSession(
      id,
      req.sessionID,
    );
    return campaign.id;
  }
  // @Get('notice')
  // getAllnotice() {
  //   console.log('hello from controller');
  //   return this.campaignService.findAllNotice();
  // }

  @Get()
  findAll() {
    return this.campaignService.findAll();
  }
  @Get('notice')
  findAllNotice(@Query('model') model: string) {
    return this.campaignService.findAllNotice(model);
  }
  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.campaignService.findOne(slug);
  }

  @UseGuards(JwtAuthGuard)
  @Get('mycampaign')
  async myCampaign(@Req() req: ReqWithUser) {
    return this.campaignService.myCampaigns(req?.user?.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('orgcampaign/:orgId')
  async orgCampaign(@Param() param) {
    const { orgId } = param
    return this.campaignService.myCampaigns(orgId);
  }

  @Put()
  update(@Body() data: UpdateCampaignDTO) {
    return this.campaignService.update(data);
  }
  @UseGuards(JwtAuthGuard)
  @Delete('/single/:id')
  async delete(@Param('id') id: string) {
    const campaign = await this.campaignService.delete(id);
    return campaign.id;
  }
  @UseGuards(JwtAuthGuard)
  @Post('like')
  async like(@Body('id') id: string, @Req() req: ReqWithUser) {
    return await this.campaignService.like(id, req.user);
  }
  @Post('approve')
  async approveCampaign(@Body() data: { campaign_id: string }) {
    return await this.campaignService.approveCampaign(data.campaign_id);
  }
  
  @Put('/viewCamp/:id')
  async viewCamp(
    @Param('id') id: string,
    @Body() data: { userId: string; }
    ): Promise<string> {
    const userId = data.userId
    const result = await this.campaignService.viewCampaign(
      id,
      userId
    )

    return result;
  }
}
