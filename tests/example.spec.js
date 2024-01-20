// @ts-check
const { test, expect } = require('@playwright/test');

// comando utilizado para abrir a pagina sempre que rodar um novo cenário
test.beforeEach(async ({page }) => {
  await page.goto('https://automationpratice.com.br/')
})

test('Login com sucesso @login', async ({ page }) => {

  const texto = await page.waitForSelector('text=NEWSLETTER')
  await texto.scrollIntoViewIfNeeded();

  // navegando pelo login
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@gmail.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.locator('#password').screenshot({ path: 'screenshots/elementosenha.png' });
  await page.screenshot({ path: 'screenshots/screenshot.png' });
  await page.getByLabel('Lembrar de mim').check();
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByLabel('Login realizado').click();
  await page.getByRole('button', { name: 'OK' }).click();

});

test('Login com sucesso 1 @login', async ({ page }) => {

  const texto = await page.waitForSelector('text=NEWSLETTER')
  await texto.scrollIntoViewIfNeeded();

  // navegando pelo login
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@gmail.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.locator('#password').screenshot({ path: 'screenshots/elementosenha.png' });
  await page.screenshot({ path: 'screenshots/screenshot.png' });
  await page.getByLabel('Lembrar de mim').check();
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByLabel('Login realizado').click();
  await page.getByRole('button', { name: 'OK' }).click();

});

test('Login com sucesso 2 @login', async ({ page }) => {


  const texto = await page.waitForSelector('text=NEWSLETTER')
  await texto.scrollIntoViewIfNeeded();

  // navegando pelo login
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@gmail.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.locator('#password').screenshot({ path: 'screenshots/elementosenha.png' });
  await page.screenshot({ path: 'screenshots/screenshot.png' });
  await page.getByLabel('Lembrar de mim').check();
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByLabel('Login realizado').click();
  await page.getByRole('button', { name: 'OK' }).click();

});




