import { expect, test } from '../util/pageFixtures';

 
test.describe('Customer Tests',() =>{
   
    test.beforeEach(async({loginPage, customerPage})=>{
        await loginPage;
    })

    test ('@customer @customer_creation @regression Verify New Customer Form Submission', async({customerPage})=>{
        const date = new Date();
        await customerPage.navigateToNewCustomerPage();
        await customerPage.fillCustomerForm('Sneha','2005-05-01','123 Main St','New York','NY','123456','1234567890',`sneha${date.getTime()}@example.com`,'password123');
        await customerPage.clickSubmitButton();
        await customerPage.sucessRegistrationMessageValidation();
        const customerId = await customerPage.getCustomerIdFromTable();
        console.log('Customer ID:', customerId);
    })

        test('@customer @customer_creation @regression Verify New Customer Form Submission with 5 digit error code message', async({customerPage})=>{
        const date = new Date();
        await customerPage.navigateToNewCustomerPage();
        await customerPage.fillCustomerForm('Sneha','2005-05-01','123 Main St','New York','NY','1234','1234567890',`sneha${date.getTime()}@example.com`,'password123');
        await customerPage.clickSubmitButton();
        await customerPage.invalidPinCodeErrorMessage('PIN Code must have 6 Digits');
    })

    test('@customer @customer_creation @regression submit form without filling data and verify alert message', async({page, customerPage})=>{
        await customerPage.navigateToNewCustomerPage();

        page.once('dialog', async dialog => {
            expect(dialog.message()).toBe('please fill all fields');
            dialog.accept();
        })
        await customerPage.clickSubmitButton();
    })

})