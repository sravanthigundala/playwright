//Type Aliases

import { chromium } from "playwright";

type stringOrNumber =string|Number;

let bankAccountNum : stringOrNumber = "sra745";
//bankAccountNum = 42111115;
console.log(bankAccountNum);
console.log(typeof bankAccountNum);

type supportedBrowsers ="chromium"|"firefox";
 
function invokeBrowsers(browserName :supportedBrowsers):void{
    if(browserName === "chromium"){
        console.log("Launch chromium browser");
    }
    else{
        console.log("Launch firefox browser");
    }
}
invokeBrowsers("chromium");