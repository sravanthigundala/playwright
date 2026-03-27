import { test,expect } from "@playwright/test";
test(`Auto Waits`,async ({page}) => {
    await page.goto("https://www.leafground.com/waits.xhtml");
    const cardToselect =page.locator(".card").filter({hasText:"Wait for Visibility"});
    const buttonTOclick =cardToselect.getByRole("button").filter({hasText:"Click"});
    await buttonTOclick.click();

    //Locator chhaining
   // await page.locator(".card").filter({hasText:"Wait for Visibility"}).getByRole("button")
   // .filter({hasText:"Click"}).click();

   await expect(page.locator(".card").filter({hasText:"Wait for Visibility"}).getByRole("button")
    .filter({hasText:"I am here"})).toBeVisible();

    
})