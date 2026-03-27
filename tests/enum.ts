//Numeric enums
enum TestResult{
    pass=1,
    fail,
    skip
}

function logTestResult(testName:string,result:TestResult):void{
    console.log(`Test:${testName},Result code:${result}`);
}
 
logTestResult("LoginTest",TestResult.pass);
logTestResult("siggnUpTest",TestResult.fail);
logTestResult("profileUpdateTest",TestResult.skip);

//String enum

enum BrowserType{
    Chrome="chrome",
    Firefox = "firefox",
    Webkit = "safari",
    Edge = "msedge"

}

function launchBrowser(browserType:BrowserType){
    console.log(`Launchhing browser ${browserType}`);
}
launchBrowser(BrowserType.Chrome);
launchBrowser(BrowserType.Edge);
launchBrowser(BrowserType.Firefox);
launchBrowser(BrowserType.Webkit);


//Heterogeneous Enum

enum BrowserStatus{
    open=1,
    close="closed",
    crash=0,
    Unknown ="unknown"
}
function reportBrowserStatus( status : BrowserStatus):string{
    return `The current status of browser ${status}`;

}
console.log(reportBrowserStatus(BrowserStatus.open));
console.log(reportBrowserStatus(BrowserStatus.close));
console.log(reportBrowserStatus(BrowserStatus.crash));
console.log(reportBrowserStatus(BrowserStatus.Unknown));