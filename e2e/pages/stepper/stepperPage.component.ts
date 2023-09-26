import { t as testController } from "testcafe";
import { SELECTORS } from "./stepperPage.selectors";
import { TcExtension } from "../../utils/testcafe-extesnsions";

export class StepperPage {
  public static async enterName(name: string): Promise<void> {
    await TcExtension.waitForElementIsVisible(SELECTORS.name);
    await testController
      .typeText(SELECTORS.name, name, {
        replace: true,
      })
      .expect(SELECTORS.name.value)
      .eql(name);
  }

  public static async enterAddress(address: string): Promise<void> {
    await TcExtension.waitForElementIsVisible(SELECTORS.address);
    await testController
      .typeText(SELECTORS.address, address, {
        replace: true,
        paste: true,
      })
      .expect(SELECTORS.address.value)
      .eql(address);
  }

  public static async checkEnteredData(
    name: string,
    address: string
  ): Promise<void> {
    await testController
      .expect(SELECTORS.dataRow.nth(0).innerText)
      .eql("You are now done!")
      .expect(SELECTORS.dataRow.nth(1).innerText)
      .eql("Name: " + name)
      .expect(SELECTORS.dataRow.nth(2).innerText)
      .eql("Address: " + address);
  }
  public static async clickNext(): Promise<void> {
    await testController.click(SELECTORS.nextButton);
  }
  public static async clickBack(): Promise<void> {
    await testController.click(SELECTORS.backButton);
  }
  public static async clickReset(): Promise<void> {
    await testController.click(SELECTORS.resetButton);
  }
}
