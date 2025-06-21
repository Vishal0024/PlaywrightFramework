import { Page } from "@playwright/test";

class LeftMenu {
  constructor(private readonly page: Page) {}

  private readonly leftMenu = (menuItemName: string) =>
    this.page.getByRole("link", { name: menuItemName });

  async selectLeftMenu(menuName: string): Promise<void> {
    await this.leftMenu(menuName).click();
  }
}

export default LeftMenu;
