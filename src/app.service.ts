import { BulkStats } from '@elastic/elasticsearch/lib/Helpers';
import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { ElasticsearcService } from './elasticsearc/elasticsearc.service';

@Injectable()
export class AppService {
  constructor(
    private readonly elasticsearch: ElasticsearchService,
    private readonly elasticsearcService: ElasticsearcService,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getCompanies(): Promise<BulkStats> {
    const results = await this.elasticsearcService.uploadData();

    return results;
  }
}
