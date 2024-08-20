// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173/';
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';
//first test - dresciption
test('App shows text and image', async ({ page }) => {
  //frist step - go to the URL
  await page.goto(LOCALHOST_URL);
  //second step - check if the elements would created
  const text = await page.getByRole('paragraph');
  const image = await page.getByRole('img');
  // It would chek if the elements contains the atributtes
  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute('src');
  //It would check the atributes propierties
  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy();
});
