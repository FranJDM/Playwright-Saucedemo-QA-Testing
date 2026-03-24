import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CheckoutPage } from '../pages/CheckoutPages';

test.describe('Flujo de Compra en SauceDemo', () => {
  
  test('Usuario puede comprar un producto exitosamente', async ({ page }) => {
    const login = new LoginPage(page);
    const checkout = new CheckoutPage(page);

    // 1. Ir a la web
    await page.goto('https://www.saucedemo.com/');

    // 2. Login
    await login.login('standard_user', 'secret_sauce');

    // 3. Acciones intermedias: Agregar mochila al carrito
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // 4. Proceso de Checkout usando POM
    await checkout.completarFormulario('QA', 'Tester', '28001');

    // 5. Verificación (Assertions)
    const mensajeExito = page.locator('.complete-header');
    await expect(mensajeExito).toHaveText('Thank you for your order!');
  });
});