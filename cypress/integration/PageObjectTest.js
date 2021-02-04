import {navigateTo} from "../support/PageObjects/NavigationPage";
import {onFormLayoutsPage} from "../support/PageObjects/formLayoutsPage";
import {onDatePickerPage} from "../support/PageObjects/DatePickerPage";
import {onSmartTablePage} from "../support/PageObjects/smartTablePage";

describe('Test with page objects', () => {
  beforeEach('open App', () => {
    cy.openHomePage()
  })
  it('verify navigations across the pages', () => {
    navigateTo.formLayoutsPage()
    navigateTo.datepickerPage()
    navigateTo.toastrPage()
    navigateTo.tooltipPage()
    navigateTo.smartTablePage()

  })
  it.only('submit inline and basic form and select', () => {
    navigateTo.formLayoutsPage()
    onFormLayoutsPage.submitInlineFormWithNameAndEmail('berat', 'abc@mail.com')
    onFormLayoutsPage.submitBasicFormWithNameAndEmail('beratsonmz','1234567')
    navigateTo.datepickerPage()
    onDatePickerPage.selectCommonDatepickerDateFromToday(1)
    onDatePickerPage.selectDatepickerWithRangeFromToday(7,14)
    navigateTo.smartTablePage()
    onSmartTablePage.updateAgeByFirstName('Larry',25)
    onSmartTablePage.addNewFakeRecord()
    onSmartTablePage.deleteRowByIndex(3)
  })
})
