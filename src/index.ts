import puppeteer from 'puppeteer';
import { PuppeteerScrapper } from './classes/Scrapper';

const scrapper = new PuppeteerScrapper(puppeteer, { headless: 'new' });

scrapper
   .openPage('https://www.google.com')
   .then((page) => page.screenshot({ type: 'png', fullPage: true , path:'screenshot.png' }))
   .finally(() => scrapper.getBrowser().then((browser) => browser.close()));
