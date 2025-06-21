import { Page } from "@playwright/test";
import TopMenu from "e2e/pages/components/topMenu";
import LeftMenu from "e2e/pages/components/leftMenu";

class HomePage {
  leftmenu: LeftMenu;
  topmenu: TopMenu;

  constructor(private readonly page: Page) {
    this.leftmenu = new LeftMenu(page);
    this.topmenu = new TopMenu(page);
  }

  getLeftMenu() {
    return this.leftmenu;
  }

  getTopMenu() {
    return this.topmenu;
  }
}

export default HomePage;
