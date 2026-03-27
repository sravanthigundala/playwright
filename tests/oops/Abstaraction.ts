// Abstract Class
abstract class ProjectSpecificMethod {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Use optional parameter instead of overloading
    abstract navigateTo(url: string, password?: string): void;

    public logSession(): void {
        console.log("This is abstract class");
    }
}

// Child Class
class ShoppingPage extends ProjectSpecificMethod {

    navigateTo(url: string): void {
        console.log(`${this.name} navigating to ${url}`);
    }

    login(username: string, password: string): void {
        console.log(`Username: ${username}`);
        console.log(`Password: ${password}`);
        console.log("Enter the user credentials");
    }
}

// Interface
interface LoginPage {
    enterUsername(): string;
    enterPassword(): string;
}

// Class implementing interface
class ProductPage implements LoginPage {

    enterUsername(): string {
        return "username entered";
    }

    enterPassword(): string {
        return "password entered";
    }
}

// ✅ Normal execution (no Playwright)
const shopping = new ShoppingPage("User1");

shopping.navigateTo("https://example.com");
shopping.login("admin", "1234");
shopping.logSession();

const product = new ProductPage();
console.log(product.enterUsername());
console.log(product.enterPassword());