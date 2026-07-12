import { expect, Expect, Locator, Page } from "@playwright/test";
import { Default_MediumTimeout } from '../util/helpers';

export class customerpage{
    private readonly page: Page;
    readonly nameInput: Locator;
    readonly menuItems: Locator;
    readonly dobInput: Locator;
    readonly addressInput: Locator;
    readonly cityInput: Locator;
    readonly stateInput: Locator;
    readonly pinInput: Locator;
    readonly mobileNumberInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly customerRegistrationSuccessMessage: Locator;
    readonly customerIdTable: Locator;


    constructor(page: Page){
        this.page= page;
        this.nameInput=page.locator('input[name="name"]');
        this.menuItems=page.locator('ul.nav')
        this.dobInput=page.locator('input[name="dob"]');
        this.addressInput=page.locator('textarea[name="addr"]');
        this.cityInput=page.locator('input[name="city"]');
        this.stateInput=page.locator('input[name="state"]');
        this.pinInput=page.locator('input[name="pinno"]');
        this.mobileNumberInput=page.locator('input[name="telephoneno"]');
        this.emailInput=page.locator('input[name="emailid"]');
        this.passwordInput=page.locator('input[name="password"]');
        this.submitButton=page.locator('input[name="sub"]');

        this.customerRegistrationSuccessMessage=page.getByText('Customer Registered Successfully!!!',{exact:true});
        this.customerIdTable=page.locator('table[id="customer"]');
    }

    async navigateToNewCustomerPage(){
        this.page.getByRole('link', { name: 'New Customer' }).click();
    }

    async fillCustomerForm(name: string, dob: string, address: string, city: string, state: string, pin: string, mobileNumber: string, email: string, password: string){
        await this.nameInput.fill(name);
        await this.dobInput.fill(dob);
        await this.addressInput.fill(address);
        await this.cityInput.fill(city);
        await this.stateInput.fill(state);
        await this.pinInput.fill(pin);
        await this.mobileNumberInput.fill(mobileNumber);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
    }

    async clickSubmitButton(){
        await this.submitButton.click();
    }

    async sucessRegistrationMessageValidation(){
        await expect(this.customerRegistrationSuccessMessage).toBeVisible();
    }

    async getCustomerIdFromTable(){
        const customerId = await this.customerIdTable.getByRole('row', { name: 'Customer Id' } ).locator('td').nth(1).textContent();
        expect(customerId).toBeTruthy();
        return customerId;
    }

    async invalidPinCodeErrorMessage(invalidPinCodeErrorMessage: string) {
        await expect(this.page.getByText(invalidPinCodeErrorMessage)).toBeVisible({ timeout: Default_MediumTimeout });
    }
} 