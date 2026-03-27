import {  test } from "@playwright/test";



test('Test to create a Lead' ,async ({page}) => {

    
    //Load the url
    await page.goto("http://leaftaps.com/opentaps/control/main");

    //await page.waitForLoadState("load");

    //Get the url of the page
    const url = page.url();
    console.log(`The url of the page is ${url}`);

    //Get the title of the page
    const title = await page.title();
    console.log(`The title of the page is ${title}`);

   // console.log (`The title of the page is ${await page.title()}`);

   //Enter the username  
      await page.getByLabel("Username").fill("demosalesmanager");

    await page.fill("#password", "crmsfa");
    await page.waitForTimeout(5000);

    //click login
   // await page.locator(".decorativeSubmit").click();
   // by using xpath
    await page.click("//input[@class='decorativeSubmit']");

    //click login
    await page.locator("text=CRM/SFA").click();

    //click Leads
    await page.getByRole("link",{name:'Leads'}).click();

    //click create Lead
    await page.locator("//a[text()='Create Lead']").click();

    //Enter companyName
    const companyName = await page.locator("#createLeadForm_companyName");
    await companyName.fill("TestLeaf123");

    //or by using nth index  ->when we doesnt have a proper locator and multiple matches are 
    // there nth(0) will return first match then last match we want then use last().
      //await page.locator("input[class='inputBox']").nth(0).fill("Testleaf");

    //Enter firstName
    await page.locator("#createLeadForm_firstName").fill("sraya");

    //Enter LastName
     await page.locator("#createLeadForm_lastName").fill("pandey");

     // select sources dropdown
     //Locate the dropdown by value
      await page.selectOption("#createLeadForm_dataSourceId", {value:"LEAD_EMPLOYEE"});

      //Get the All THE VALUES  in the dropdown
      const dropdown =page.locator("#createLeadForm_dataSourceId>option");
      //count
      const dropdownCount =await dropdown.count();
      console.log(`No.of values:${dropdownCount}`);

      for (let index = 0; index < dropdownCount; index++) {
        console.log(await dropdown.nth(index).innerText());
        
      }
      await page.waitForTimeout(3000);

      //select the currency dropdown by index
      await page.selectOption("#createLeadForm_currencyUomId",{index:13});

      await page.waitForTimeout(3000);

      //select the country dropdown by its label(visible text)
      await page.selectOption("#createLeadForm_generalCountryGeoId",{label:"India"}); 

      await page.waitForTimeout(3000);

    //click create lead //Attribute based selector
    await page.click("[name='submitButton']");

    //get the status
    console.log(`The status is ${await page.locator("#viewLead_statusId_sp").innerText()}`);
})