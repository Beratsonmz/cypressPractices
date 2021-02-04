import {navigateTo} from "../support/PageObjects/NavigationPage";

describe('First Suite', () => {

  beforeEach('open App', () => {
    cy.openHomePage()
  })

  it('Dialog Box', () => {
    navigateTo.smartTablePage()

    //1
    // const stub = cy.stub()
    // cy.on('window:confirm', stub)
    // cy.get('tbody tr').first().find('.nb-trash').click().then(() => {
    //   expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
    // })
    //2
    cy.get('tbody tr').first().find('.nb-trash').click()
    cy.on('window:confirm', () => false)

  })
  it('Tooltip', () => {
    navigateTo.tooltipPage()

    cy.contains('nb-card', 'Colored Tooltips')
      .contains('Default').click()
    cy.get('nb-tooltip').should('contain', 'This is a tooltip')

  })
})
