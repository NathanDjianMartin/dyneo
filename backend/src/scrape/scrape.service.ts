import { Injectable } from '@nestjs/common';

import puppeteer from 'puppeteer';

@Injectable()
export class ScrapeService {
  async getLinkedInUserInfo() {
    const nameSelector = 'h1';
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
    });
    const page = await browser.newPage();
    await page.goto('https://www.linkedin.com/in/nathan-djian-martin/');
    await page.waitForSelector(nameSelector);

    const data = await page.evaluate(() => {
      const name = document.querySelector(nameSelector)?.innerText;
      return name;
    });

    return data;
  }
}
