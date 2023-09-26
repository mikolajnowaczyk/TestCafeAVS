import { Selector } from "testcafe";

export const CSS_SELECTOR_PARAMS = {
  name: "#mat-input-0",
  address: "#mat-input-1",
  button: "button",
  dataRow: "[role='tabpanel'] > p",
  warningText: "small.text-danger",
};

export const SELECTORS = {
  name: Selector(CSS_SELECTOR_PARAMS.name),
  address: Selector(CSS_SELECTOR_PARAMS.address),
  dataRow: Selector(CSS_SELECTOR_PARAMS.dataRow),
  nextButton: Selector(CSS_SELECTOR_PARAMS.button)
    .filterVisible()
    .withExactText("Next"),
  backButton: Selector(CSS_SELECTOR_PARAMS.button)
    .filterVisible()
    .withExactText("Back"),
  resetButton: Selector(CSS_SELECTOR_PARAMS.button)
    .filterVisible()
    .withExactText("Reset"),
  warning: Selector(CSS_SELECTOR_PARAMS.warningText),
};
