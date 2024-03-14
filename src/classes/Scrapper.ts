import { PuppeteerNode, Browser, Page } from 'puppeteer';

interface PuppeteerScrapperOptions {
   headless: boolean | string;
}

class Scrapper {
   protected opts: Object;

   constructor(opts: Object) {
      this.opts = opts;
   }

   async getBrowser(): Promise<any> {
      console.log('Not implemented yet!');
      throw new Error('getBrowser method not implemented');
   }
}

export class PuppeteerScrapper extends Scrapper {
   private pptr: PuppeteerNode;
   private engine: Promise<Browser>;

   constructor(pptr: PuppeteerNode, options: PuppeteerScrapperOptions) {
      super(options);
      this.pptr = pptr;
      this.engine = this.pptr.launch(this.opts);
   }

   async getBrowser(): Promise<Browser> {
      return await this.engine;
   }

   async openPage(url: string): Promise<Page> {
      const pptr: Browser = await this.engine;
      const page = await pptr.newPage();

      try {
         console.log('URL:',url);

         await page.goto(url);
      } catch (error) {
         console.error(`Error navigating to ${url}:`, error);
         throw error;
      }
      return page;
   }
}
