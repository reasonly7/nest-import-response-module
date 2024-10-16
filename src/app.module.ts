import { Module } from '@nestjs/common';
import { importConfigModule } from './config/importConfigModule';
import { AppController } from './app.controller';
import { ResponseModule } from './response/response.module';

@Module({
  imports: [importConfigModule(), ResponseModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
