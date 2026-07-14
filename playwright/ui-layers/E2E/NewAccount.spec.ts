import { expect, test } from '../util/pageFixtures';

 
test.describe('Customer Tests',() =>{
   
    test.beforeEach(async({loginPage, customerPage, NewAccountPage})=>{
        await loginPage;
    })

    test ('@customer @customer_creation @regression Verify Adding New Account Details with submit button', async({customerPage, NewAccountPage})=>{
        const date = new Date();
        await customerPage.navigateToNewCustomerPage();
        await customerPage.fillCustomerForm('Sneha','2005-05-01','123 Main St','New York','NY','123456','1234567890',`sneha${date.getTime()}@example.com`,'password123');
        await customerPage.clickSubmitButton();
        await customerPage.sucessRegistrationMessageValidation();
        const customerId = await customerPage.getCustomerIdFromTable();
        console.log('Customer ID:', customerId);
        await NewAccountPage.navigateToNewAccountPage();
        await NewAccountPage.enterCustomerIdInput(customerId!);
        await NewAccountPage.selectAccountType('Savings');
        await NewAccountPage.enterInitialDeposit('1000');
        await NewAccountPage.clickSubmitButton();
    })
    test('@customer @customer_creation @regression Verify Adding New Account Details with reset button', async({customerPage, NewAccountPage})=>{
        const date = new Date();
        await customerPage.navigateToNewCustomerPage();
        await customerPage.fillCustomerForm('Sneha','2005-05-01','123 Main St','New York','NY','123456','1234567890',`sneha${date.getTime()}@example.com`,'password123');
        await customerPage.clickSubmitButton();
        await customerPage.sucessRegistrationMessageValidation();
        const customerId = await customerPage.getCustomerIdFromTable();
        console.log('Customer ID:', customerId);
        await NewAccountPage.navigateToNewAccountPage();
        await NewAccountPage.enterCustomerIdInput(customerId!);
        await NewAccountPage.selectAccountType('Savings');
        await NewAccountPage.enterInitialDeposit('1000');
        await NewAccountPage.clickResetButton();
    })
    test('@customer @customer_creation @regression verify Adding New Account Details and verify alert message', async({page,customerPage, NewAccountPage})=>{
        const date = new Date();
        await customerPage.navigateToNewCustomerPage();
        await customerPage.fillCustomerForm('Sneha','2005-05-01','123 Main St','New York','NY','123456','1234567890',`sneha${date.getTime()}@example.com`,'password123');
        await customerPage.clickSubmitButton();
        await customerPage.sucessRegistrationMessageValidation();
        const customerId = await customerPage.getCustomerIdFromTable();
        console.log('Customer ID:', customerId);
        await NewAccountPage.navigateToNewAccountPage();
        await NewAccountPage.enterCustomerIdInput(customerId!);
        await NewAccountPage.selectAccountType('Savings');
        await NewAccountPage.enterInitialDeposit('12asd')
        await NewAccountPage.InvalidCharacter;
    })

})


