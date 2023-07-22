import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScrapeModule } from './scrape/scrape.module';
import { RendererModule } from './renderer/renderer.module';

@Module({
  imports: [ScrapeModule, RendererModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
