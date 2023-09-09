import { BulkStats } from '@elastic/elasticsearch/lib/Helpers';
import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import * as fs from 'fs';
import { join } from 'path';
import * as split from 'split2';

@Injectable()
export class ElasticsearcService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async uploadData(): Promise<BulkStats> {
    const fileDir = join(__dirname, '../../search-data3.ndjson');

    const result = await this.elasticsearchService.helpers.bulk({
      datasource: fs.createReadStream(fileDir).pipe(split()),
      onDocument(doc) {
        console.log(doc);
        return {
          index: { _index: 'search-data3' },
        };
      },
    });

    return result;
  }
}
