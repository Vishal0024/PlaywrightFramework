import { Page } from "@playwright/test";

class AddEmployee {
  private readonly firstNameTextBox;
  private readonly lastNameTextBox;
  private readonly employeeIdTextBox;
  private readonly saveBtn;
  public readonly successMessage;

  constructor(private readonly page: Page) {
    this.firstNameTextBox = this.page.getByPlaceholder("First Name");
    this.lastNameTextBox = this.page.getByPlaceholder("Last Name");
    this.employeeIdTextBox = this.page.getByRole("textbox").nth(4);
    this.saveBtn = this.page.getByRole("button", { name: "Save" });
    this.successMessage = this.page.getByText(/Successfully Saved/i);
  }

  async fillEmployeeDetails(
    firstName: string,
    lastName: string,
    employeeId: string,
  ): Promise<void> {
    await this.firstNameTextBox.fill(firstName);
    await this.lastNameTextBox.fill(lastName);
    await this.employeeIdTextBox.fill(employeeId);
    await this.saveBtn.click();
  }
}

export default AddEmployee;
