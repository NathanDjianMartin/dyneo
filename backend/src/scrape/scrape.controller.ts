import { Controller, Get, Param } from '@nestjs/common';
import { ScrapeService } from 'src/scrape/scrape.service';

@Controller('scrape')
export class ScrapeController {
  constructor(private readonly scrapeService: ScrapeService) {}

  @Get('linkedin/:linkedInId')
  getLinkedInUserData(@Param('linkedInId') linkedInId: string) {
    return this.scrapeService.getLinkedInUserInfo(linkedInId);
  }
}
