import { Injectable } from '@nestjs/common';

import puppeteer from 'puppeteer';

@Injectable()
export class ScrapeService {
  async getLinkedInUserInfo(linkedinId: string) {
    const nameSelector = 'h1';
    const browser = await puppeteer.launch({
      defaultViewport: null,
    });
    const page = await browser.newPage();
    await page.goto(`https://www.linkedin.com/in/${linkedinId}/`);
    await page.waitForSelector(nameSelector);

    const data = await page.evaluate((nameSelector) => {
      const nameElement = document.querySelector(nameSelector);

      if (!(nameElement instanceof HTMLHeadingElement)) {
        throw new Error(
          "nameSelector is not a HTMLHeadingElement, it doesn't have an 'innerText' property",
        );
      }
      const name = nameElement.innerText;
      return name;
    }, nameSelector);

    return data;
  }
}
