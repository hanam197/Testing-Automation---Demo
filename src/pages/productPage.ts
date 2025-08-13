import { Locator, Page } from "@playwright/test";

export class ProductPage {
  //Element
  readonly page: Page;
  readonly shoppingCartButton: Locator;
  readonly sortDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shoppingCartButton = page.locator('[data-test="shopping-cart-link"]');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
  }

  //Methods

  private toSlug(name: string): string {
    // 'Sauce Labs Backpack' -> 'sauce-labs-backpack'
    return name.toLowerCase().replace(/\s+/g, "-");
  }

  // Dynamic locator

  addToCartButton(productName: string): Locator {
    return this.page.locator(
      `[data-test="add-to-cart-"${this.toSlug(productName)}]`
    );
  }

  productTitle(productName: string): Locator {
    return this.page.locator(".inventory_item_name", { hasText: productName });
  }

  removeToCartButton(productName: string): Locator {
    return this.page.locator(
      `[data-test="remove-"${this.toSlug(productName)}]`
    );
  }

  //Actions

  async clickShoppingCart() {
    await this.shoppingCartButton.click();
  }

  async addProductToCart(productName: string) {
    await this.addToCartButton(productName).click();
  }

  async removeProductFromCart(productName: string) {
    await this.removeToCartButton(productName).click();
  }

  async clickProductTitle(productName: string) {
    await this.productTitle(productName).click();
  }

  async selectSortOpition(opiton: string) {
    await this.sortDropdown.selectOption(opiton);
  }
}
