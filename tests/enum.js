//Numeric enums
var TestResult;
(function (TestResult) {
    TestResult[TestResult["pass"] = 1] = "pass";
    TestResult[TestResult["fail"] = 2] = "fail";
    TestResult[TestResult["skip"] = 3] = "skip";
})(TestResult || (TestResult = {}));
function logTestResult(testName, result) {
    console.log("Test:".concat(testName, ",Result code:").concat(result));
}
logTestResult("LoginTest", TestResult.pass);
logTestResult("siggnUpTest", TestResult.fail);
logTestResult("profileUpdateTest", TestResult.skip);
//String enum
var BrowserType;
(function (BrowserType) {
    BrowserType["Chrome"] = "chrome";
    BrowserType["Firefox"] = "firefox";
    BrowserType["Webkit"] = "safari";
    BrowserType["Edge"] = "msedge";
})(BrowserType || (BrowserType = {}));
function launchBrowser(browserType) {
    console.log("Launchhing browser ".concat(browserType));
}
launchBrowser(BrowserType.Chrome);
launchBrowser(BrowserType.Edge);
launchBrowser(BrowserType.Firefox);
launchBrowser(BrowserType.Webkit);
//Heterogeneous Enum
var BrowserStatus;
(function (BrowserStatus) {
    BrowserStatus[BrowserStatus["open"] = 1] = "open";
    BrowserStatus["close"] = "closed";
    BrowserStatus[BrowserStatus["crash"] = 0] = "crash";
    BrowserStatus["Unknown"] = "unknown";
})(BrowserStatus || (BrowserStatus = {}));
function reportBrowserStatus(status) {
    return "The current status of browser ".concat(status);
}
console.log(reportBrowserStatus(BrowserStatus.open));
console.log(reportBrowserStatus(BrowserStatus.close));
console.log(reportBrowserStatus(BrowserStatus.crash));
console.log(reportBrowserStatus(BrowserStatus.Unknown));
