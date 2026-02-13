/*Assignment Details:
Task:
Your task is to launch two separate browser instances using Playwright:
1. Load Red Bus in an Edge browser instance and verify the page title and URL.
2. Load Flipkart in a Webkit browser instance and verify the page title and URL.
Preconditions:
1. Use Playwright to launch Edge and Webkit.
2. Create two separate browser instances.
3. Use the following URLs: o Red Bus: https://www.redbus.in o Flipkart:
https://www.flipkart.com
Requirements:
• Red Bus (Edge): o Load the home page and print the page title and current URL.
Flipkart (Webkit): o Load the home page and print the page title and current URL.
Hints:
• Use page.title() to retrieve the page title.
• Use page.url() to retrieve the current page URL.
Expected Outcome:
• Upon completion, you should be able to navigate two websites in two separate browser
instances (Edge and Webkit), retrieve page information, and print the page titles and URLs.*/
import {test, chromium, webkit}  from '@playwright/test';
test ('load broser in sedge' , async()=>{
    const edgeBrowser = await chromium.launch({
        channel: 'msedge',
        headless: false,
    });
    const context = await edgeBrowser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.redbus.in'); 
    console.log("the tilte of the page", await page.title());
    console.log("the URL of the page", await page.url())
})

test ('load broser in webkit' , async()=>{
    const webKitBrowser = await webkit.launch({
        headless: false,
    });
    const context = await webKitBrowser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.flipkart.com');    
    console.log("the tilte of the page", await page.title());
    console.log("the URL of the page",  page.url())
})
