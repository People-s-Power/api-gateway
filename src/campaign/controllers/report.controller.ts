import { Body, Controller, Get, Inject, Param, Post, Put, Logger } from '@nestjs/common';
import { reportDTO } from '../schema/reportCamp.dto';
import { ReportCampService } from '../services/reportCamp.service';

@Controller('api/v3/reports')
export class ReportCampController {
  logger: Logger;
  constructor(
    private readonly reportCampService: ReportCampService
    ) {
      this.logger = new Logger()
    }

    @Get('/:slug')
    async getCampReports(@Param() param) {
      const { slug } = param
      const results = await this.reportCampService.getReports(slug)
      return results
    }

    @Get()
    getAllReports() {
      return this.reportCampService.getAllReports()
    }

    @Post()
    createReportPost(@Body() data: reportDTO) {
      return this.reportCampService.createReport(data);
    }

    @Put('/:reportId')
    resolveReportPut(@Param() param): Promise<any> {
      const { reportId } = param
      return this.reportCampService.resolveReport(reportId);
    }

}
