import { Selector, t as testController } from "testcafe";
import { SELECTORS } from "./homePage.selectors";
import { TcExtension } from "../../utils/testcafe-extesnsions";

export class HomePage {
  public static async waitForBannerToLoad(): Promise<void> {
    await TcExtension.waitForElementIsVisible(SELECTORS.appRunningBanner);
  }

  public static async checkTerminalText(text: string): Promise<void> {
    await testController.expect(SELECTORS.terminal.innerText).eql("ng " + text);
  }
}
