import { test } from "@playwright/test";

test(`Test to handle dialogues`,async ({page}) => {
    
    await page.goto("https://www.leafground.com/alert.xhtml");

    //Simple Dialog
    await page.locator("text=Show").first().click();

    await page.waitForTimeout(2000);

    //Confirm Dialog
    await page.locator(".card").filter({hasText:"(Confirm Dialog)"}).locator("//span[text()='Show']").click();

    await page.waitForTimeout(2000);

    //Prompt Dialog
    const  cardLocator = await page.locator(".card").filter({hasText:"(Prompt Dialog)"});
    await cardLocator.locator("button").filter({hasText:"Show"}).click();

    await page.waitForTimeout(2000);
    
})
 test(`Test to handle dialogs by using event listners`,async ({page}) => {
    
    await page.goto("https://www.leafground.com/alert.xhtml");

    page.on("dialog",async dialog =>{
        const message =  dialog.message();
        console.log(`The message says ${message}`);

        const type =dialog.type();
        console.log(`Thhe message says ${type}`);
        if(type==="confirm"){
            await dialog.accept();
        }else if(type === "prompt"){
            await dialog.accept("sravvv"); 
        }else{
            await dialog.dismiss();
        }
       // dialog.accept("sravvv");
    })

    //Simple Dialog
    await page.locator("text=Show").first().click();

    await page.waitForTimeout(2000);

    //Confirm Dialog
    await page.locator(".card").filter({hasText:"(Confirm Dialog)"}).locator("//span[text()='Show']").click();

    await page.waitForTimeout(2000);

    //Prompt Dialog
    const  cardLocator = await page.locator(".card").filter({hasText:"(Prompt Dialog)"});
    await cardLocator.locator("button").filter({hasText:"Show"}).click();

    await page.waitForTimeout(2000);
    
})

test(`Test to handle specific dailogs by using event listners`,async ({page}) => {

    await page.goto("https://www.leafground.com/alert.xhtml");

    page.once("dialog",async dialog =>{
        const message =  dialog.message();
        console.log(`The message says ${message}`);

        const type =dialog.type();
        console.log(`Thhe message says ${type}`);
        dialog.accept("sravvv");
    })
    

    //Simple Dialog
    await page.locator("text=Show").first().click();

    await page.waitForTimeout(2000);
    page.once("dialog",async dialog =>{
        const message =  dialog.message();
        console.log(`The message says ${message}`);

        const type =dialog.type();
        console.log(`Thhe message says ${type}`);
        if(type==="confirm"){
            await dialog.accept();
        }else if(type === "prompt"){
            await dialog.accept("sravvv"); 
        }else{
            await dialog.dismiss();
        }
    })

    //Confirm Dialog
    await page.locator(".card").filter({hasText:"(Confirm Dialog)"}).locator("//span[text()='Show']").click();

    await page.waitForTimeout(2000);

    //Prompt Dialog
    const  cardLocator = await page.locator(".card").filter({hasText:"(Prompt Dialog)"});
    await cardLocator.locator("button").filter({hasText:"Show"}).click();

    await page.waitForTimeout(2000);
       
});
    
