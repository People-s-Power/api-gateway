import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { TransactionService } from './transaction.service';

@Controller('api/v3/transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}
  @Get()
  tx() {
    return this.transactionService.sendTx()
  }

  @Get('verify/:reference')
  verify(@Param('reference') reference: string) {
    if (process.env.NODE_ENV === 'developement') {
      return this.transactionService.verifyPayment(reference);
    }
  }
  
  @Post('webhook')
  async webhook(@Body() body: any, @Res() res: Response) {
    await this.transactionService.webhook(body);
    return res.status(200);
  }

  @Get('camp/:key')
  async sendTxForCamp(@Param() param) {
    const { campId } = param 
    return this.transactionService.sendTxForCamp(campId)
  }
}
