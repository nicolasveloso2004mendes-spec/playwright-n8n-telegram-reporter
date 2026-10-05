import { test, expect } from '@playwright/test';

test('Teste Forçado para Falhar e Testar Telegram', async ({ page }) => {
  // 1. Abre o site do Google
  await page.goto('https://www.google.com');

  // 2. Tenta validar um título errado para forçar a falha
  await expect(page).toHaveTitle(/Título Que Nao Existe/);
});