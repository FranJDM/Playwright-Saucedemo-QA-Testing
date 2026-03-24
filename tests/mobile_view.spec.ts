import { test, expect, devices } from '@playwright/test';

// Definimos la emulación del iPhone fuera del describe
const iPhone = devices['iPhone 13 Pro'];
test.use({ ...iPhone });

test.describe('Pruebas Mobile Responsivo', () => {

  test('Debe mostrar el menú lateral en vista móvil (SauceDemo)', async ({ page }) => {
    // 1. Navegar a la web
    await page.goto('https://www.saucedemo.com/');

    // 2. Realizar Login
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // 3. Verificación de elementos móviles
    // En móvil, el botón de menú (hamburguesa) debe ser visible
    const menuButton = page.locator('#react-burger-menu-btn');
    await expect(menuButton).toBeVisible();
    
    // El carrito también debe estar presente
    const shoppingCart = page.locator('.shopping_cart_link');
    await expect(shoppingCart).toBeVisible();
    
    // 4. Captura de pantalla (Se guardará en la carpeta 'screenshots')
    await page.screenshot({ path: 'screenshots/iphone-view.png' });
  });
});