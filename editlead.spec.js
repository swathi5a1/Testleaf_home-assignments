import test from '@playwright/test';
import { expect } from '@playwright/test';
test("Create lead page", async({page})=>{
    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator('#username').fill('Demosalesmanager');
    await page.locator('#password').fill("crmsfa");
    await page.locator('.decorativeSubmit').click();
    await page.locator(':text("CRM/SFA")').click();
    await page.locator('a:has-text("Leads")').click();
    await page.locator('a:has-text("Find Leads")').click();
    await page.locator("//input[@id='ext-gen248']").fill("nallamothu");
    await page.locator("//button[text()='Find Leads']").click();
    await page.waitForTimeout(2000);
    await page.locator("//div[@class='x-grid3-cell-inner x-grid3-col-partyId']/a").first().click();
    await page.getByText('Edit', { exact: true }).click();
    await page.locator('#updateLeadForm_companyName').fill("TCS");
    await page.locator('#updateLeadForm_annualRevenue').fill("2500000");
    await page.locator('#updateLeadForm_departmentName').fill("IT");
    await page.locator('#updateLeadForm_description').fill("Software Testing")
    await page.locator('.smallSubmit').click();
    await expect(page.locator('#viewLead_companyName_sp')).toHaveText('TCS');
    await expect(page.locator('#viewLead_annualRevenue_sp')).toHaveText('2,500,000');
    await expect(page.locator('#viewLead_departmentName_sp')).toHaveText('IT');
    await expect(page.locator('#viewLead_description_sp')).toHaveText('Software Testing');
});