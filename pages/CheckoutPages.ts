import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly cartIcon: Locator;
  readonly checkoutBtn: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly zipCode: Locator;
  readonly continueBtn: Locator;
  readonly finishBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartIcon = page.locator('.shopping_cart_link');
    this.checkoutBtn = page.locator('[data-test="checkout"]');
    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.zipCode = page.locator('[data-test="postalCode"]');
    this.continueBtn = page.locator('[data-test="continue"]');
    this.finishBtn = page.locator('[data-test="finish"]');
  }

  async completarFormulario(nombre: string, apellido: string, cp: string) {
    await this.cartIcon.click();
    await this.checkoutBtn.click();
    await this.firstName.fill(nombre);
    await this.lastName.fill(apellido);
    await this.zipCode.fill(cp);
    await this.continueBtn.click();
    await this.finishBtn.click();
  }
}