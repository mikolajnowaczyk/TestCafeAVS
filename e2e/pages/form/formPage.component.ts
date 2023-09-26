import { Selector, t as testController } from "testcafe";
import { SELECTORS } from "./formPage.selectors";
import { TcExtension } from "../../utils/testcafe-extesnsions";

export class FormPage {
  public static async enterHeroDetails(
    heroName: string,
    alterEgo: string,
    heroPower: string
  ): Promise<void> {
    await TcExtension.waitForElementIsVisible(SELECTORS.heroName);
    await testController
      .typeText(SELECTORS.heroName, heroName, {
        replace: true,
      })
      .typeText(SELECTORS.alterEgo, alterEgo, {
        replace: true,
      })
      .click(SELECTORS.heroPower)
      .click(SELECTORS.heroPowerOption.withText(heroPower))
      .expect(SELECTORS.heroName.value)
      .eql(heroName)
      .expect(SELECTORS.alterEgo.value)
      .eql(alterEgo)
      .expect(SELECTORS.heroPower.value)
      .eql(heroPower);
  }

  public static async resetForm(): Promise<void> {
    await testController
      .click(SELECTORS.resetButton)
      .expect(SELECTORS.heroName.value)
      .eql("")
      .expect(SELECTORS.alterEgo.value)
      .eql("")
      .expect(SELECTORS.heroPower.value)
      .eql("");
  }

  public static async submitHero(
    heroName: string,
    alterEgo: string,
    heroPower: string
  ): Promise<void> {
    await testController.click(SELECTORS.submitButton);
    await testController
      .expect(
        SELECTORS.resultRow.withText("Name").child("div").nth(1).textContent
      )
      .eql(heroName)
      .expect(
        SELECTORS.resultRow.withText("Alter Ego").child("div").nth(1)
          .textContent
      )
      .contains(alterEgo)
      .expect(
        SELECTORS.resultRow.withText("Power").child("div").nth(1).textContent
      )
      .eql(heroPower);
  }
}
