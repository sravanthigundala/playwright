import {Browser,BrowserContext,Page,chromium} from "playwright"

async function performAction(url:string,action:'screenshot'|'title'):Promise<string|void>{

    const browser:Browser=await chromium.launch({headless:false});
    const context:BrowserContext=await browser.newContext();
    const page: Page=await context.newPage();
    await page.goto(url);
    if(action==='screenshot'){
        const screenshotpath ='screenshot.png';
        await page.screenshot({path:screenshotpath});
        await browser.close();
        return `save a screenshot as ${screenshotpath}`;
    }
    else if(action==='title'){
        const title =await page.title();
        await browser.close(); 
        return `The title of thhe page is ${title}`;
    }
    await browser.close();

}
async function runTest(){
    const screenshotResult =await performAction("https://www.myntra.com/",'screenshot');
    console.log(screenshotResult);

    const titleResult =await performAction("https://www.myntra.com/",'title');
    console.log(titleResult);

}
runTest();