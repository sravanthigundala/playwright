var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstract Class
var ProjectSpecificMethod = /** @class */ (function () {
    function ProjectSpecificMethod(name) {
        this.name = name;
    }
    ProjectSpecificMethod.prototype.logSession = function () {
        console.log("This is abstract class");
    };
    return ProjectSpecificMethod;
}());
// Child Class
var ShoppingPage = /** @class */ (function (_super) {
    __extends(ShoppingPage, _super);
    function ShoppingPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShoppingPage.prototype.navigateTo = function (url) {
        console.log("".concat(this.name, " navigating to ").concat(url));
    };
    ShoppingPage.prototype.login = function (username, password) {
        console.log("Username: ".concat(username));
        console.log("Password: ".concat(password));
        console.log("Enter the user credentials");
    };
    return ShoppingPage;
}(ProjectSpecificMethod));
// Class implementing interface
var ProductPage = /** @class */ (function () {
    function ProductPage() {
    }
    ProductPage.prototype.enterUsername = function () {
        return "username entered";
    };
    ProductPage.prototype.enterPassword = function () {
        return "password entered";
    };
    return ProductPage;
}());
// ✅ Normal execution (no Playwright)
var shopping = new ShoppingPage("User1");
shopping.navigateTo("https://example.com");
shopping.login("admin", "1234");
shopping.logSession();
var product = new ProductPage();
console.log(product.enterUsername());
console.log(product.enterPassword());
