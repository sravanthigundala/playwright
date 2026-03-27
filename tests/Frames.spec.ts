import { test } from "@playwright/test";

test(`Test to interact with the frames`,async ({page}) => {

    await page.goto("https://www.oneindia.com/");

    //To get the frames in the page
    const frames =page.frames();
    console.log(frames)

    await page.waitForTimeout(2000);

    //To get the count of the frames in the webpage
    const frameCount = page.frames().length;
    console.log(`No.of the frames in page ${frameCount}`);

    for(let frame of frames){
        const title= await frame.title();
        console.log(`Thhe title of the frames is ${title}`);   
    }
     await page.waitForTimeout(3000);
    
})

test(`Test to interact with the frames by using leafgground app`, async ({page}) => {

    await page.goto("https://www.leafground.com/frame.xhtml");

    //To get the frames in the page
    const frames =page.frames();
    console.log(frames)

    await page.waitForTimeout(2000);

    //To get the count of the frames in the webpage
    const frameCount = page.frames().length;
    console.log(`No.of the frames in page ${frameCount}`);

    for(let frame of frames){
        const title= await frame.title();
        console.log(`Thhe title of the frames is ${title}`);   
    }
     await page.waitForTimeout(3000);
    
});

test(`Test to handle the frames by using the frame object`,async ({page}) => {

    await page.goto("https://www.leafground.com/frame.xhtml");

    //Interactive with the iframe by using url
    const  frame =await page.frame({url:"https://www.leafground.com/default.xhtml"});

    //click  the button
    frame?.click("button#Click");

    /*
    *conditional check
       if(frame!==null){
       select the frame 
       click the button
       }
       * Non null assertion operator
         frame!.click("");
          */

         await page.waitForTimeout(3000);

         //Using index
         const frames =page.frames();
         await frames[4]?.locator("button#Click").click();
          await page.waitForTimeout(3000);
    
});

test.only(`Handling frames by using frameLoator Oobject`, async ({page}) => {

    await page.goto("https://www.leafground.com/frame.xhtml");

    //using frame locator
    const  frame =page.frameLocator("iframe").first();
    await frame.locator("#Click").click();


    //chaining
     //await page.frameLocator("iframe").first().locator("#Click").click();


     //Interact with nested frames
     const card =page.locator(".card").filter({hasText:"(Inside Nested frame)"});
     const frame1 = card.frameLocator("iframe");
     const frame2 =frame1.frameLocator("iframe");
     await frame2.locator("#Click").click();

     //chaining
    // await page.locator(".card").filter({hasText:"(Inside Nested frame)"}).
    // frameLocator("iframe").frameLocator("iframe").locator("#Click").click();

    await page.waitForTimeout(3000);

    
})