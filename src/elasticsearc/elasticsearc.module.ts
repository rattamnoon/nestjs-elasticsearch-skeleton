import { Module } from '@nestjs/common';
import { ElasticsearchModule as BaseElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [
    BaseElasticsearchModule.register({
      node: 'http://localhost:9200',
      maxRetries: 10,
      requestTimeout: 60000,
      pingTimeout: 60000,
      sniffOnStart: true,
      // auth: {
      //   username: 'elastic',
      //   password: 'KOpsitKSxi01Vodz=Zya',
      // },
      // tls: {
      //   rejectUnauthorized: false,
      // },
    }),
  ],
  exports: [BaseElasticsearchModule],
})
export class ElasticsearcModule {}
