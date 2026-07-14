import {test, Locator, Page, expect} from '@playwright/test';
import { Default_MediumTimeout } from '../util/helpers';

export class NewAccountPage {
    readonly page: Page;
    readonly newAccountMenuItem: Locator;
    readonly customerIdInput: Locator
    readonly accountTypeDropdown: Locator;
    readonly initialDepositInput: Locator;
    readonly submitButton: Locator;
    readonly resetButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.newAccountMenuItem = page.getByRole('link', { name: 'New Account', exact: true });
        this.customerIdInput = page.locator('input[name="cusid"]');
        this.accountTypeDropdown = page.locator('select[name="selaccount"]');
        this.initialDepositInput = page.locator('input[name="inideposit"]');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.resetButton = page.getByRole('button', { name: 'Reset' });
    }

    async navigateToNewAccountPage() {
        await expect(this.newAccountMenuItem).toBeEnabled();
        await this.newAccountMenuItem.click();
    }

    async enterCustomerIdInput(customerIdInput: string) {
        await this.customerIdInput.fill(customerIdInput);
    }

    async selectAccountType(accountType: string) {
        await this.accountTypeDropdown.selectOption({ label: accountType });
    }
    async enterInitialDeposit(initialDeposit: string) {
    await this.initialDepositInput.fill(initialDeposit);
    }
    async clickSubmitButton() {
        await this.submitButton.click();
    }
    async clickResetButton() {
        await this.resetButton.click();
    }
    async InvalidCharacter(InvalidCharacter: string){
        await expect(this.page.getByText('Characters are not allowed')).toBeVisible({ timeout: Default_MediumTimeout });
    }
    
}
