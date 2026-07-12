import { expect, test } from '../util/pageFixtures';

test.describe('Customer Tests',() =>{
    test.beforeEach(async({loginPage,})=>{
        await loginPage.dologin('mngr663722','aruqYbA');
    })

    test ('Verify New Customer Form Submission', async({customerPage, deleteCustomerPage, page})=>{
        const date = new Date();
        await customerPage.navigateToNewCustomerPage();
        await customerPage.fillCustomerForm('Sneha','2005-05-01','123 Main St','New York','NY','123456','1234567890',`sneha${date.getTime()}@example.com`,'password123');
        await customerPage.clickSubmitButton();
        await customerPage.sucessRegistrationMessageValidation();
        const customerId = await customerPage.getCustomerIdFromTable();
        console.log('Customer ID:', customerId);
        await deleteCustomerPage.navigateToDeleteCustomerPage();
        await deleteCustomerPage.enterCustomerIdInput(customerId!);
        await deleteCustomerPage.HandleAlertwithAccept();
        await deleteCustomerPage.clickSubmitButton();

        await page.goBack();
        await deleteCustomerPage.navigateToDeleteCustomerPage();
        await deleteCustomerPage.enterCustomerIdInput(customerId!);
        await deleteCustomerPage.clickSubmitButton();
    }) 
})
