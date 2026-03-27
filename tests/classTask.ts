/*  1.create atype for supported browsers(chrome|Edge)
*   2.crate atype for browser version(127|126)
    3.create an object type combining both
    4.create a function that accepts the browser profile
    5.Launch chrome
    6.call the function 
*****/
 
//Define browser type
type supportedBrowser ="Chrome"|"Edge";

//Define browser version
type browserVersion =127|126;

//create browserprofile object type
type browserProfile = {
    browserName : supportedBrowser;
    version : browserVersion;
}

//create function and pass browser profile

function LaunchBrowser(browser:browserProfile):void{
    if(browser.browserName === "Chrome" && browser.version === 127){
        console.log("Launching chrome Browser");
    }else{
        console.log("Launching Edge Browser");
      
      }

}
//Launch chrome using object
const chromeBrowser:browserProfile ={
    browserName:"Chrome",
    version :127
}
const Edgebrowser:browserProfile ={
    browserName :"Edge",
    version :126
};

//call the function
LaunchBrowser(chromeBrowser);
