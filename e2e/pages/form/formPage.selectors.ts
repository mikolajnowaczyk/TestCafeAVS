import { Selector } from "testcafe";

export const CSS_SELECTOR_PARAMS = {
  heroName: "#name",
  alterEgo: "#alterEgo",
  heroPower: "#power",
  submitButton: '[type="submit"]',
  resetButton: '[type="button"]',
  resultContainer: ".container.results",
  editButton: "[type='button'].btn-primary",
};

export const SELECTORS = {
  heroName: Selector(CSS_SELECTOR_PARAMS.heroName),
  alterEgo: Selector(CSS_SELECTOR_PARAMS.alterEgo),
  heroPower: Selector(CSS_SELECTOR_PARAMS.heroPower),
  heroPowerOption: Selector(CSS_SELECTOR_PARAMS.heroPower).find("option"),
  submitButton: Selector(CSS_SELECTOR_PARAMS.submitButton).withText("Submit"),
  resetButton: Selector(CSS_SELECTOR_PARAMS.resetButton).withText("New Hero"),
  editButton: Selector(CSS_SELECTOR_PARAMS.editButton).withText("Edit"),
  resultContainer: Selector(CSS_SELECTOR_PARAMS.resultContainer),
  resultRow: Selector(CSS_SELECTOR_PARAMS.resultContainer).find(".row"),
};
