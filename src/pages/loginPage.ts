import { Locator, Page } from "@playwright/test";
import { LoginData } from "../models/login";

export class LoginPage {
  //Element
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly errorCloseButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
    this.errorCloseButton = page.locator('[data-test="error-button"]');
  }

  //Methods

  async gotoURL() {
    await this.page.goto(`${process.env.URL}`);
  }

  async enterUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickButtonLogin() {
    await this.loginButton.click();
  }

  async login(propsData: LoginData) {
    await this.usernameInput.fill(propsData.username);
    await this.passwordInput.fill(propsData.password);
    await this.loginButton.click();
  }

  async getErrorMessage() {
    return this.errorMessage.textContent() ?? "";
  }
}
