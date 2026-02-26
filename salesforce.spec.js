import test from '@playwright/test';
import { expect } from '@playwright/test';
test("Create lead page", async({page})=>{
    await page.goto('https://login.salesforce.com/');
    await page.getByLabel('Username').fill(' saiadithya1990.4cf68fc592d1@agentforce.com');
    await page.getByLabel('Password').fill('Qazwsx@2026');
    await page.locator('#Login').click();
});