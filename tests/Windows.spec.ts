import { expect, test } from "@playwright/test";
import { log } from "node:console";
test(`Handling Windows`,async ({context,page}) => {

    const page1 = await context.newPage();
    await page.goto("https://www.leafground.com/window.xhtml");
    await page1.goto("https://www.amazon.in/");

    await page1.waitForTimeout(2000);

    const page2 =await context.newPage();
    await page2.goto("https://www.redbus.in/");

    //To get the count of all thhe pages in the context
    const allpages =context.pages();
    //allpages :[leafgground, Amazon, redbus]
       console.log(allpages);

       console.log(`No,of the pages opened : ${allpages.length}`);

       //To get the title of each page
       for(let page of allpages){
        const title = await page.title();
        console.log(`The title of the page is ${title}`); 
       }

       //Using index
       await allpages[1]?.bringToFront();
       await page.waitForTimeout(2000);
})

test(`Handling Windows byy using sequential approach`,async ({context,page}) => {
    await page.goto("https://www.leafground.com/window.xhtml");

    const windowPromise = context.waitForEvent("page");//promise pending/promise creating
    await page.getByText("Open",{exact:true}).click();
    const window = await windowPromise; // promise fullfilled
    await expect(window).toHaveURL("https://www.leafground.com/dashboard.xhtml");

    //Interact with the new page
    await window.fill("#email","rr7@gmail.com");
    //await window.close();

    await page.bringToFront();

    await page.locator("//i[@class='pi pi-home']").click();
    await page.waitForTimeout(3000);

    
})

test(`Handling the window by using concurrently`,async ({context,page}) => {

    await page.goto("https://www.leafground.com/window.xhtml");
    
    const [newWindow] = await Promise.all([
        context.waitForEvent("page"),
        await page.getByText("Open",{exact:true}).click()
    ])

        await expect(newWindow).toHaveURL("https://www.leafground.com/dashboard.xhtml");

    //Interact with the new page
    await newWindow.fill("#email","rr7@gmail.com");
    //await window.close();

    await page.bringToFront();

    await page.locator("//i[@class='pi pi-home']").click();
    await page.waitForTimeout(3000);    
})

test.only(`Handling MultipleWindows`,async ({context,page}) => {

    await page.goto("https://www.leafground.com/window.xhtml");
    
    const [multiplePages] = await Promise.all([
        context.waitForEvent("page"),
        await page.getByText("Open Multiple",{exact:true}).click()
    ])

    const  pages = multiplePages.context().pages();
    console.log(`No.of pages: ${pages.length}`);

    pages.forEach(async tabs =>{
        const url = tabs.url();
        console.log(`The url of the page : ${url}`);

        const title = await tabs.title();
        console.log(`The title of the page is ${title}`);

    })

    //Using index

    let webpage: any;
    
    for (let index = 0; index < pages.length; index++) {
        const pageTitle = await pages[index]?.title();
        console.log(`The title of the page: ${pageTitle}`);

        if(pageTitle === "Web Table"){
            webpage = pages[index]
        }  
    }
    await webpage.bringToFront();
    await webpage.fill("input[placeholder='Search']" , "Amy Elsner");
    
    await webpage.waitForTimeout(3000);
})