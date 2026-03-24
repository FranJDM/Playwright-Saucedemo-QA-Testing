import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  /* Ejecutar tests en paralelo para ahorrar tiempo */
  fullyParallel: true,
  /* Fallar en CI si se queda un test.only olvidado */
  forbidOnly: !!process.env.CI,
  /* Reintentar solo en CI */
  retries: process.env.CI ? 2 : 0,
  /* Optar por un solo worker en CI */
  workers: process.env.CI ? 1 : undefined,
  /* Reporte en formato HTML */
  reporter: 'html',

  use: {
    /* Base URL para las peticiones de API del Proyecto 2 */
    baseURL: 'https://restful-booker.herokuapp.com',

    /* Configuración para que Playwright envíe y reciba JSON correctamente */
    extraHTTPHeaders: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },

    /* Grabar traza en el primer reintento fallido */
    trace: 'on-first-retry',
  },

  /* Configuración de navegadores para el Proyecto 1 */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    /* He dejado Firefox y Webkit por si hay que probar compatibilidad, 
       pero para empezar con Chromium es suficiente */
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});