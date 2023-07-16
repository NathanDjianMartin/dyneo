import { Controller, Get } from '@nestjs/common';
import { ScrapeService } from 'src/scrape/scrape.service';

@Controller('scrape')
export class ScrapeController {
  constructor(private readonly scrapeService: ScrapeService) {}

  @Get('linkedin')
  getLinkedInUserData() {
    return this.scrapeService.getLinkedInUserInfo();
  }
}
