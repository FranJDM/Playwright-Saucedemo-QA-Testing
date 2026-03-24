# QA Automation Portfolio - Playwright 🚀

Este repositorio contiene una suite de pruebas automatizadas que cubren los tres pilares fundamentales del Testing moderno: **Web E2E**, **API Testing** y **Mobile Emulation**. 

Desarrollado con **Playwright** y **TypeScript**, aplicando el patrón de diseño **Page Object Model (POM)**.

---

## 🏗️ Estructura del Proyecto

* **`tests/compra.spec.ts`**: Flujo completo de E-commerce (Login -> Carrito -> Checkout).
* **`tests/api_hotel.spec.ts`**: Pruebas de integración de API (Auth, CRUD de reservas).
* **`tests/mobile_view.spec.ts`**: Verificación de diseño responsivo emulando iPhone 13 Pro.
* **`pages/`**: Implementación de Page Object Model para facilitar el mantenimiento.

## 🛠️ Tecnologías y Herramientas

* **Framework:** Playwright
* **Lenguaje:** TypeScript
* **Reportes:** Playwright HTML Reporter / Allure
* **CI/CD:** GitHub Actions (ejecución automática en cada push)
* **Patrón:** Page Object Model (POM)

---

## 🚀 Cómo ejecutar el proyecto

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/TU_USUARIO/TU_REPO.git](https://github.com/TU_USUARIO/TU_REPO.git)
   cd TU_REPO

2. **Instalar dependencias:**
   ```bash
   npm install

3. **Ejecutar las pruebas:**
   ```bash
    npx playwright test

4. **Generar reportes:**
    ```bash
    npx playwright test

## 📈 Resultados y Reportes

Web: npx playwright test tests/compra.spec.ts

API: npx playwright test tests/api_hotel.spec.ts

Mobile: npx playwright test tests/mobile_view.spec.ts

CI/CD: Configuración de GitHub Actions para ejecución automática en cada push.
