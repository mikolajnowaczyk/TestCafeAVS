import { Selector } from "testcafe";

export const CSS_SELECTOR_PARAMS = {
  youtubeIcon: "a[title='YouTube']",
  twitterIcon: "a[title='Twitter']",
  stepperLink: "#stepper-view-link",
  formLink: "#form-view-link",
  welcomeLink: "#main-view-link",
};

export const SELECTORS = {
  youtubeIcon: Selector(CSS_SELECTOR_PARAMS.youtubeIcon),
  twitterIcon: Selector(CSS_SELECTOR_PARAMS.twitterIcon),
  stepperLink: Selector(CSS_SELECTOR_PARAMS.stepperLink),
  formLink: Selector(CSS_SELECTOR_PARAMS.formLink),
  welcomeLink: Selector(CSS_SELECTOR_PARAMS.welcomeLink),
};
