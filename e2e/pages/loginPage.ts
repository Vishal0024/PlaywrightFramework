import { Page } from "@playwright/test";

class LoginPage {
  private readonly userNameTextBox;
  private readonly passwordTextBox;
  private readonly loginBtn;

  constructor(private readonly page: Page) {
    this.userNameTextBox = this.page.getByPlaceholder("Username");
    this.passwordTextBox = this.page.getByPlaceholder("Password");
    this.loginBtn = this.page.getByRole("button", { name: "Login" });
  }

  async login(username: string, password: string): Promise<void> {
    await this.userNameTextBox.fill(username);
    await this.passwordTextBox.fill(password);
    await this.loginBtn.click();
  }
}

export default LoginPage;
