/* 1. Navigate to the URL: http://leaftaps.com/opentaps/control/main
2. Enter the username as Demosalesmanager
3. Enter the password as crmsfa
4. Click the Login button
5. Click CRM/SFA
6. Click Leads
7. Click Create Lead
8. Fill the Company Name
9. Fill the First Name
10. Fill the Last Name
11. Fill the Salutation
12. Fill the Title
13. Fill the Annual Revenue
14. Fill the Department
15. Fill the Phone Number
16. Click Create Lead button*/ 
import test from '@playwright/test';
test("Create lead page", async({page})=>{
    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator('#username').fill('Demosalesmanager');
    await page.locator('#password').fill("crmsfa");
    await page.locator('.decorativeSubmit').click();
    await page.locator(':text("CRM/SFA")').click();
    await page.locator('a:has-text("Leads")').click();
    await page.locator(':text("Create Lead")').click();
    await page.locator('#createLeadForm_companyName').fill("capgemini");
    await page.locator('#createLeadForm_firstName').fill("nallamothu");
    await page.locator('#createLeadForm_lastName').fill("swathi");
    await page.locator('#createLeadForm_personalTitle').fill("Female");
    await page.locator('#createLeadForm_generalProfTitle').fill("Mrs");
    await page.locator('#createLeadForm_annualRevenue').fill('2500000');
    await page.locator('#createLeadForm_generalProfTitle').fill('IT');
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('9994567898');
    await page.locator('.smallSubmit').click();
})