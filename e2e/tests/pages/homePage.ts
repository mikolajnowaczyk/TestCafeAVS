import { HomePage } from "../../pages/home/homePage.component";
import { resourcesCardsUrls, nextStepsButtons } from "../../data/homepage";
import { SELECTORS } from "../../pages/home/homePage.selectors";

fixture(`Homepage tests`);

test("Example test of the homepage", async () => {
  await HomePage.waitForBannerToLoad();
});

test("Example error test", async (testController) => {
  await testController.expect(true).eql(false);
});

test("Verify homepage", async (testController) => {
  await HomePage.waitForBannerToLoad();
  for (const card of resourcesCardsUrls) {
    await testController
      .expect(card.selector.getAttribute("href"))
      .eql(card.url);
  }
  for (const btn of nextStepsButtons) {
    await testController
      .click(btn.selector)
      .expect(SELECTORS.terminal.innerText)
      .eql("ng " + btn.terminalText);
  }
});
