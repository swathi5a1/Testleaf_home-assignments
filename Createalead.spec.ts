import test from '@playwright/test';
import { expect } from '@playwright/test';
test("Create lead page", async({page})=>{
    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator('#username').fill('Demosalesmanager');
    await page.locator('#password').fill("crmsfa");
    await page.locator('.decorativeSubmit').click();
    await page.locator(':text("CRM/SFA")').click();
    await page.locator('a:has-text("Leads")').click();
    await page.locator(':text("Create Lead")').click();
    await page.locator('#createLeadForm_companyName').fill("TCS");
    await page.locator('#createLeadForm_firstName').fill("nallamothu");
    await page.locator('#createLeadForm_lastName').fill("swathi");
    await page.locator('#createLeadForm_personalTitle').fill("Female");
    await page.locator('#createLeadForm_generalProfTitle').fill("Mrs");
    await page.locator('#createLeadForm_annualRevenue').fill('2500000');
    await page.locator('#createLeadForm_generalProfTitle').fill('IT');
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('9994567898');
    await page.locator('.smallSubmit').click();
   
    await expect(page.locator('#viewLead_companyName_sp')).toHaveText('TCS'); 
    await expect(page.locator('#viewLead_firstName_sp')).toHaveText('nallamothu');
    await expect(page.locator('#viewLead_lastName_sp')).toHaveText('swathi');

    const companyName = await page.locator('#viewLead_companyName_sp').textContent();
    const firstName = await page.locator('#viewLead_firstName_sp').textContent();
    const lastName = await page.locator('#viewLead_lastName_sp').textContent();
    expect(companyName).toBe('capgemini');
    expect(firstName).toBe('nallamothu');
    expect(lastName).toBe('swathi');
        
})