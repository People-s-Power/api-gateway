import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IreportDTO } from '../schema/reportCamp.dto';
import { ReportCamp, ReportCampDocument } from '../schema/reportCamp.schema';

@Injectable()
export class ReportCampService {
  logger: Logger;
  constructor(
    private readonly configService: ConfigService,
    @InjectModel(ReportCamp.name) private readonly reportModel: Model<ReportCampDocument>
  ) {
    this.logger = new Logger()
  }

  async getAllReports() {
    const reports = await this.reportModel.find()

    return reports
  }

  async createReport(data) {
    try{
      if (!data.campaignSlug || !data.reportCampMessage || !data.reportType) {
        this.logger.log(data)
        throw new BadRequestException('Add the need info')
      }

      const report = await this.reportModel.create({
        campaignSlug: data.campaignSlug,
        reportType: data.reportType,
        reportCampMessage: data.reportCampMessage
      })
      // console.log(report);
      return report
    } catch(error) {
      throw error
    }
  }

  async resolveReport(reportId: String): Promise<any> {
    const report = await this.reportModel.deleteOne({ _id: reportId })
    return report
  }

  async getReports(slug: string) {
    const campReports = await this.reportModel.find({ campaignSlug: slug })
    return campReports
  }

}
