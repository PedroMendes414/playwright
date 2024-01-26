class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = '[data-test="username"]';
      this.passwordInput = '[data-test="password"]';
      this.loginButton = '[data-test="login-button"]';
      this.errorElement = '[data-test="error"]';
      this.successElement = '#item_4_img_link';
    }
  
    async navigate() {
      await this.page.goto('https://www.saucedemo.com');
    }
  
    async login(username, password) {
      await this.page.click(this.usernameInput);
      await this.page.fill(this.usernameInput, username);
      await this.page.click(this.passwordInput);
      await this.page.fill(this.passwordInput, password);
      await this.page.click(this.loginButton);
    }
  
    async isLoggedIn() {
      return this.page.title() === 'Swag Labs' && (await this.page.isVisible(this.successElement));
    }
  
    async getErrorMessage() {
      return this.page.innerText(this.errorElement);
    }
  }
  
  module.exports = LoginPage;
  