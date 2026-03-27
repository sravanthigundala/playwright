import { expect, test } from "@playwright/test";

test(`Test to assert the  textbox`,async ({page}) => {

    await page.goto("https://www.leafground.com/input.xhtml");
    
    //enabled textbox
    const typeName =page.getByPlaceholder("Babu Manickam");
    await expect(typeName).toBeEnabled();
    await typeName.fill("sraa");

    //Diabled textbox
    const disableTextbox = page.getByPlaceholder("Disabled");
    await expect(disableTextbox).toBeDisabled();
    await disableTextbox.fill("bjfwn");
    await page.waitForTimeout(3000);
   
})

test.only(`Assertions using HardAssert`,async ({page}) => {
    await page.goto("https://www.leafground.com/input.xhtml");
    
    const appendtxtbox = page.locator("//input[@value='Chennai']");
    await expect(appendtxtbox).toBeEnabled({timeout:2000});
    await appendtxtbox.type("India");

    //HardAssertion
    const disableTextbox = page.getByPlaceholder("Disabled");
    await expect.(disableTextbox).toBeEnabled(); //assertion fails

    //softAssertion
   // const disableTextbox = page.getByPlaceholder("Disabled");
    //await expect.soft(disableTextbox).toBeEnabled(); //assertion fails

    
    const  clearbox =page.locator("//input[@value='Can you clear me, please?']");
    await expect(clearbox).toBeEnabled();
    await clearbox.clear();
    await clearbox.fill("dyvvm");
    await page.waitForTimeout(3000);

    
})
