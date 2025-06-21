import { test, expect } from "@playwright/test";

test("Add Employee", async ({ page }) => {
  console.log("URL in test:", process.env.URL);
  await page.goto(process.env.URL);
  await page
    .getByRole("textbox", { name: "Username" })
    .fill(process.env.USER_NAME);
  await page
    .getByRole("textbox", { name: "Password" })
    .fill(process.env.PASS_WORD);
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("link", { name: "PIM" }).click();
  await page.getByRole("button", { name: " Add" }).click();
  await page.getByRole("textbox", { name: "First Name" }).fill("Vishal");
  await page.getByRole("textbox", { name: "Last Name" }).fill("Bansal");
  await page
    .getByRole("textbox")
    .nth(4)
    .fill(String(Math.floor(Math.random() * 100000)));
  await page.getByRole("button", { name: "Save" }).click();
  await expect(page.getByText(/Successfully Saved/)).toBeVisible();
});
