import { StepperPage } from "../../pages/stepper/stepperPage.component";
import { stepperData } from "../../data/stepperData";
import { TcExtension } from "../../utils/testcafe-extesnsions";
import { SELECTORS } from "../../pages/stepper/stepperPage.selectors";

fixture(`Stepper`).page("./stepper");

test("Provide a valid details", async () => {
  await StepperPage.enterName(stepperData.name);
  await StepperPage.clickNext();
  await StepperPage.enterAddress(stepperData.address);
  await StepperPage.clickNext();
  await StepperPage.checkEnteredData(stepperData.name, stepperData.address);
});

test("Resetting form should clear all entered data", async () => {
  await StepperPage.enterName("xx " + stepperData.name);
  await StepperPage.clickNext();
  await StepperPage.enterAddress("xx " + stepperData.address);
  await StepperPage.clickNext();
  await StepperPage.checkEnteredData(
    "xx " + stepperData.name,
    "xx " + stepperData.address
  );
  await StepperPage.clickReset();
  await TcExtension.waitForElementIsVisible(SELECTORS.name);
  await StepperPage.enterName(stepperData.name);
  await StepperPage.clickNext();
  await StepperPage.enterAddress(stepperData.address);
  await StepperPage.clickNext();
  await StepperPage.checkEnteredData(stepperData.name, stepperData.address);
});

test("Should be able to go back and re-enter data", async () => {
  await StepperPage.enterName("xx " + stepperData.name);
  await StepperPage.clickNext();
  await StepperPage.enterAddress("xx " + stepperData.address);
  await StepperPage.clickNext();
  await TcExtension.waitForElementIsVisible(SELECTORS.dataRow);
  await StepperPage.clickBack();

  await TcExtension.waitForElementIsVisible(SELECTORS.address);
  await StepperPage.clickBack();
  await StepperPage.enterName(stepperData.name);
  await StepperPage.clickNext();
  await StepperPage.enterAddress(stepperData.address);
  await StepperPage.clickNext();
  await StepperPage.checkEnteredData(stepperData.name, stepperData.address);
});

test("Name and address are trimmed", async () => {
  await StepperPage.enterName("  " + stepperData.name + "  ");
  await StepperPage.clickNext();
  await StepperPage.enterAddress("  " + stepperData.address + "  ");
  await StepperPage.clickNext();
  await StepperPage.checkEnteredData(stepperData.name, stepperData.address);
});

test("Name and address should not exceed maximum length", async (testController) => {
  await StepperPage.enterName(stepperData.name.repeat(5));
  await testController
    .expect(SELECTORS.warning.innerText)
    .eql("The maximum length for this field is 20 characters.");
  await StepperPage.enterName(stepperData.name);
  await StepperPage.clickNext();
  await StepperPage.enterAddress(stepperData.address.repeat(5));
  await testController
    .expect(SELECTORS.warning.innerText)
    .eql("The maximum length for this field is 30 characters.");
});
