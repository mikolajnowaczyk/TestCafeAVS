import { SELECTORS } from "../pages/home/homePage.selectors";

export const resourcesCardsUrls: { selector: Selector; url: string }[] = [
  {
    selector: SELECTORS.learnAngularCard,
    url: "https://angular.io/tutorial",
  },
  {
    selector: SELECTORS.cliDocCard,
    url: "https://angular.io/cli",
  },
  {
    selector: SELECTORS.angularBlogCard,
    url: "https://blog.angular.io/",
  },
  {
    selector: SELECTORS.angularDevToolsCard,
    url: "https://angular.io/devtools/",
  },
];

export const nextStepsButtons: { selector: Selector; terminalText: string }[] =
  [
    {
      selector: SELECTORS.newComponentButton,
      terminalText: "generate component xyz",
    },
    {
      selector: SELECTORS.angularMaterialButton,
      terminalText: "add @angular/material",
    },
    {
      selector: SELECTORS.addPWAButton,
      terminalText: "add @angular/pwa",
    },
    {
      selector: SELECTORS.addDependencyButton,
      terminalText: "add _____",
    },
    {
      selector: SELECTORS.runAndWatchTestsButton,
      terminalText: "test",
    },
    {
      selector: SELECTORS.buildProdButton,
      terminalText: "build",
    },
  ];
