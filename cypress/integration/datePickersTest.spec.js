import {navigateTo} from "../support/PageObjects/NavigationPage";

describe('First Suite', () => {
  beforeEach('open App', () => {
    cy.openHomePage()
  })

  it('assert property', () => {

    function selectDayFromCurrent(day) {
      let date = new Date();
      date.setDate(date.getDate() + day)
      let futureDay = date.getDate()
      let futureMonth = date.toLocaleString('default', {month: 'short'})
      let dateAssert = futureMonth + ' ' + futureDay + ', ' + date.getFullYear()

      cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date')
        .then(dateAttribute => {
          cy.wait(1000)
          if (!dateAttribute.includes(futureMonth)) {

            cy.get('[data-name="chevron-right"]').click()

            selectDayFromCurrent(day)

          } else {
            cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]')

              .contains(futureDay).click()

          }
        })
      return dateAssert
    }

    navigateTo.datepickerPage()

    cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
      cy.wrap(input).click()
      let dateAssert = selectDayFromCurrent(65)
      cy.wrap(input).invoke('prop', 'value').should('contain', dateAssert)
      cy.wrap(input).should('have.value', dateAssert)

    })
  })
})
