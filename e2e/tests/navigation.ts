import { SELECTORS } from "../components/navigationBar/navigationBar.selectors";
import { HomePage } from "../pages/home/homePage.component";
import { ClientFunction } from "testcafe";

fixture(`Navigation`);
const getURL = ClientFunction(() => window.location.href.toString());

test("Check links", async (testController) => {
  await testController
    .expect(SELECTORS.welcomeLink.getAttribute("href"))
    .eql("/")
    .expect(SELECTORS.formLink.getAttribute("href"))
    .eql("/form")
    .expect(SELECTORS.stepperLink.getAttribute("href"))
    .eql("/stepper")
    .expect(SELECTORS.twitterIcon.getAttribute("href"))
    .eql("https://twitter.com/angular")
    .expect(SELECTORS.youtubeIcon.getAttribute("href"))
    .eql("https://youtube.com/angular");
});

test("Check invalid url", async (testController) => {
  await HomePage.waitForBannerToLoad();
  await testController
    .navigateTo("./testExampleOnly")
    .expect(getURL())
    .eql("https://angular-qa-recruitment-app.netlify.app/");
});
