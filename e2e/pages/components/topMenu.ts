import { Page } from "@playwright/test";

class TopMenu {
  constructor(private readonly page: Page) {}

  private readonly topMenu = (menuItemName: string) =>
    this.page.getByRole("link", { name: menuItemName });

  async selectMenu(menuName: string): Promise<void> {
    await this.topMenu(menuName).click();
  }
}

export default TopMenu;
