import { test, expect } from "@playwright/test";
import LoginPage from "e2e/pages/loginPage";
import HomePage from "e2e/pages/homePage";
import AddEmployee from "e2e/pages/addEmployeePage";

test("Add Employee", async ({ page }) => {
  console.log("URL in test:", process.env.URL);

  await page.goto(process.env.URL);
  const loginPage = new LoginPage(page);
  await loginPage.login(process.env.USER_NAME, process.env.PASS_WORD);

  const homePage = new HomePage(page);
  await homePage.getLeftMenu().selectLeftMenu("PIM");
  await homePage.getTopMenu().selectMenu("Add Employee");

  const addEmployee = new AddEmployee(page);
  await addEmployee.fillEmployeeDetails(
    "Vishal",
    "Bansal",
    String(Math.floor(Math.random() * 100000)),
  );

  await expect(addEmployee.successMessage).toBeVisible();
});
