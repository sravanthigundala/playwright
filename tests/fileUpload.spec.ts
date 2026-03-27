import { expect, test } from "@playwright/test";
import path from "path";

test(`Test to upload file`,async ({page}) => {

    await page.goto("https://www.leafground.com/file.xhtml");

    const filePath = path.join(__dirname, "file-sample_150kB.PDF");

    //Directly upload the file in the particular location
    await page.locator(".card").filter({has:page.getByText("Basic Upload")})
 .locator("input[type='file']").setInputFiles(filePath);

  //[path/file1.img, path/file2.mp4]

  //await expect(page.locator(".card")).filter({has:page.getByText("Basic Upload")})
  //.locator(".ui-fileupload-filename")).toContainText("file-sample_150kB.PDF");


  const card = page.locator(".card", { hasText: "Basic Upload" });

          await expect(
         card.locator(".ui-fileupload-filename")
         ).toContainText("file-sample_150kB.PDF");

         await page.waitForTimeout(3000);

    
})

test.only(`Test to upload file using filechooser`,async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/upload");
    const filePromise = page.waitForEvent("filechooser");
await page.click("#drag-drop-upload");
const fileChooser = await filePromise;
await fileChooser.setFiles([path.join(__dirname, "file-sample_150kB.PDF")]);

await expect(page.locator("#drag-drop-upload"))
  .toHaveClass("dz-success-mark dz-clickable dz-started");    
})