import { test, expect } from '@playwright/test';

// Forzamos el modo serial para que los tests dependientes se ejecuten en orden
test.describe.configure({ mode: 'serial' });

test.describe('API Testing - Restful Booker', () => {
  let bookingId: number;
  let token: string;
  const URL_BASE = 'https://restful-booker.herokuapp.com';

  // 1. Generar Token de Autenticación
  test.beforeAll(async ({ request }) => {
    const response = await request.post(`${URL_BASE}/auth`, {
      data: {
        username: 'admin',
        password: 'password123'
      }
    });
    const body = await response.json();
    token = body.token;
  });

  // 2. Crear una reserva (POST)
  test('Debe crear una reserva de hotel', async ({ request }) => {
    const response = await request.post(`${URL_BASE}/booking`, {
      data: {
        firstname: 'Jim',
        lastname: 'Brown',
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: '2024-01-01',
          checkout: '2024-01-02'
        },
        additionalneeds: 'Breakfast'
      }
    });

    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    bookingId = body.bookingid;
    expect(body.booking.firstname).toBe('Jim');
  });

  // 3. Obtener la reserva creada (GET)
  test('Debe obtener la información de la reserva por ID', async ({ request }) => {
    // Si el test anterior falló, este no tendrá ID
    test.step('Verificar que tenemos un ID', () => {
        expect(bookingId).toBeDefined();
    });

    const response = await request.get(`${URL_BASE}/booking/${bookingId}`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.lastname).toBe('Brown');
  });

  // 4. Eliminar la reserva (DELETE)
  test('Debe eliminar la reserva usando el token', async ({ request }) => {
    const response = await request.delete(`${URL_BASE}/booking/${bookingId}`, {
      headers: {
        'Cookie': `token=${token}`
      }
    });
    // Esta API devuelve 201 Created cuando el borrado es exitoso
    expect(response.status()).toBe(201);
  });
});