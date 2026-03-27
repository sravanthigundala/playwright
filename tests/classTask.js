/*  1.create atype for supported browsers(chrome|Edge)
*   2.crate atype for browser version(127|126)
    3.create an object type combining both
    4.create a function that accepts the browser profile
    5.Launch chrome
    6.call the function
*****/
//create function and pass browser profile
function LaunchBrowser(browser) {
    if (browser.browserName === "Chrome" && browser.version === 127) {
        console.log("Launching chrome Browser");
    }
    else {
        console.log("Launching Edge Browser");
    }
}
//Launch chrome using object
var chromeBrowser = {
    browserName: "Chrome",
    version: 127
};
var Edgebrowser = {
    browserName: "Edge",
    version: 126
};
//call the function
LaunchBrowser(chromeBrowser);
