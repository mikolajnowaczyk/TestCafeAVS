import { FormPage } from "../../pages/form/formPage.component";
import { heroData } from "../../data/heroData";

fixture`Form page tests`.page("./form");

test("Submit a valid hero", async () => {
  await FormPage.enterHeroDetails(
    heroData.heroName,
    heroData.alterEgo,
    heroData.heroPower
  );

  await FormPage.submitHero(
    heroData.heroName,
    heroData.alterEgo,
    heroData.heroPower
  );
});

test("Submit an invalid hero", async () => {
  await FormPage.enterHeroDetails(
    heroData.heroName,
    heroData.alterEgo,
    heroData.heroPower
  );

  await FormPage.submitHero(
    heroData.heroName,
    heroData.alterEgo,
    heroData.heroPower
  );
});

// test("Check ");
