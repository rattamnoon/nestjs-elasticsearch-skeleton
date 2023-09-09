import { BulkStats } from '@elastic/elasticsearch/lib/Helpers';
import { Controller, Get, InternalServerErrorException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/companies')
  async getCompanies(): Promise<BulkStats> {
    try {
      return this.appService.getCompanies();
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
