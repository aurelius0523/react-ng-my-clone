import puppeteer from 'puppeteer';

/**
 * Copied from https://developers.google.com/web/tools/puppeteer/articles/ssr
 * @param url url of the page to pre-render
 */
export const ssr = async (url: string) => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });
    const html = await page.content(); // serialized HTML of page DOM.
    await browser.close();
    return html;
}