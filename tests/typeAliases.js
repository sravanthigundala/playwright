"use strict";
//Type Aliases
Object.defineProperty(exports, "__esModule", { value: true });
var bankAccountNum = "sra745";
//bankAccountNum = 42111115;
console.log(bankAccountNum);
console.log(typeof bankAccountNum);
function invokeBrowsers(browserName) {
    if (browserName === "chromium") {
        console.log("Launch chromium browser");
    }
    else {
        console.log("Launch firefox browser");
    }
}
invokeBrowsers("chromium");
