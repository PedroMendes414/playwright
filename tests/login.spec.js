const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com')
});

    test('Login com sucesso - standard_user', async ({ page }) => {
    
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    // Afirmações para indicadores de sucesso
    await expect(page).toHaveTitle('Swag Labs')
    await expect(page.locator('#item_4_img_link')).toBeVisible();

  });

  test('Login com falha - locked_out_user ', async ({ page }) => {
    
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.');

  });

  test('Login com sucesso - problem_user ', async ({ page }) => {
    
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('problem_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveTitle('Swag Labs')
    await expect(page.locator('#item_4_img_link')).toBeVisible();
    
  });

  test('Login com sucesso - performance_glitch_user', async ({ page }) => {
    
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('performance_glitch_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveTitle('Swag Labs')
    await expect(page.locator('#item_4_img_link')).toBeVisible();

  });

  test('Login com sucesso - error_user', async ({ page }) => {
    
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('error_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveTitle('Swag Labs')
    await expect(page.locator('#item_4_img_link')).toBeVisible();
    
  });

  test('Login com sucesso - visual_user', async ({ page }) => {
    
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('visual_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveTitle('Swag Labs')
    await expect(page.locator('#item_4_img_link')).toBeVisible();
    
  });

  test('Tentativa de login sem preencher o campo de usuário, mas preenchendo o campo de senha', async ({ page }) => {
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username is required');
});

test('Tentativa de login preenchendo o campo de usuário, mas não preenchendo o campo de senha', async ({ page }) => {
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Password is required');
});

test('Tentativa de login sem preencher nenhum dos campos', async ({ page }) => {
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username is required');
});

test('Tentativa de login com um usuário válido, mas senha incorreta', async ({ page }) => {
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('senha_incorreta');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
});


