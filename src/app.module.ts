import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElasticsearcModule } from './elasticsearc/elasticsearc.module';
import { ElasticsearcService } from './elasticsearc/elasticsearc.service';

@Module({
  imports: [ElasticsearcModule],
  controllers: [AppController],
  providers: [AppService, ElasticsearcService],
})
export class AppModule {}
