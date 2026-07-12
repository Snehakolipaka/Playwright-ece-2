import { Page, Locator } from '@playwright/test';



export class loginpage {
  static dologin(arg0: string, arg1: string) {
      throw new Error('Method not implemented.');
  }
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(private page: Page) {
    this.usernameInput = page.locator('input[name="uid"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('input[name="btnLogin"]');
  }

  async dologin(username: string, password: string) {
    await this.page.goto('https://demo.guru99.com/V4/index.php');

    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}