import { Selector } from "testcafe";

export const CSS_SELECTOR_PARAMS = {
  appRunningBanner: ".card.card-small.highlight-card",
  linkCard: "a.card",
  buttonCard: "button.card",
  terminal: ".terminal",
};

export const SELECTORS = {
  appRunningBanner: Selector(CSS_SELECTOR_PARAMS.appRunningBanner),
  learnAngularCard: Selector(CSS_SELECTOR_PARAMS.linkCard).withText(
    "Learn Angular"
  ),
  cliDocCard: Selector(CSS_SELECTOR_PARAMS.linkCard).withText(
    "CLI Documentation"
  ),
  angularBlogCard: Selector(CSS_SELECTOR_PARAMS.linkCard).withText(
    "Angular Blog"
  ),
  angularDevToolsCard: Selector(CSS_SELECTOR_PARAMS.linkCard).withText(
    "Angular DevTools"
  ),
  newComponentButton: Selector(CSS_SELECTOR_PARAMS.buttonCard).withText(
    "New Component"
  ),
  angularMaterialButton: Selector(CSS_SELECTOR_PARAMS.buttonCard).withText(
    "Angular Material"
  ),
  addPWAButton: Selector(CSS_SELECTOR_PARAMS.buttonCard).withText(
    "Add PWA Support"
  ),
  addDependencyButton: Selector(CSS_SELECTOR_PARAMS.buttonCard).withText(
    "Add Dependency"
  ),
  runAndWatchTestsButton: Selector(CSS_SELECTOR_PARAMS.buttonCard).withText(
    "Run and Watch Tests"
  ),
  buildProdButton: Selector(CSS_SELECTOR_PARAMS.buttonCard).withText(
    "Build for Production"
  ),
  terminal: Selector(CSS_SELECTOR_PARAMS.terminal),
};
