import { t as testController } from "testcafe";

export enum TestTimeout {
  _100MS = 100,
  _200MS = 200,
  _500MS = 500,
  _1S = 1000,
  _5S = 5000,
  _10S = 10000,
}

export class TcExtension {
  public static async clearInput(elementSelector: Selector): Promise<void> {
    await testController.selectText(elementSelector).pressKey("delete");
  }

  public static async waitFor(
    callback: Function,
    timeout: number = TestTimeout._10S,
    delay: number = TestTimeout._200MS
  ): Promise<void> {
    const initTime: number = performance.now();
    let isSucces: boolean = false;
    do {
      await testController.wait(delay);
      isSucces = await callback();
    } while (isSucces == false && performance.now() - initTime <= timeout);
  }

  public static async waitForElementIsVisible(
    elementSelector: Selector,
    timeout: number = TestTimeout._10S,
    delay: number = TestTimeout._200MS
  ): Promise<void> {
    await this.waitFor(async () => elementSelector.visible, timeout, delay);
  }
}
