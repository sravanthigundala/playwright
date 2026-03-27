import {test,expect  } from "@playwright/test";
import path from "path";

test(`Test to download file `,async ({page}) => {

    await page.goto("https://www.leafground.com/file.xhtml");
    const fileDownloadPromise = page.waitForEvent("download");
await page.getByRole('button',{name:'Download'}).click();
const fileDownloader = await fileDownloadPromise ;
await fileDownloader.saveAs(path.join("downloads/"+fileDownloader.suggestedFilename()));

//extract and return the suggested file name from content-disposition header

const downloadurl =fileDownloader.url();
console.log(`The file is downloaded from :${downloadurl}`);
    
})