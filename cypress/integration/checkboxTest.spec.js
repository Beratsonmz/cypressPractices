import {navigateTo} from "../support/PageObjects/NavigationPage";

describe('First Suite', () => {
  beforeEach('open App', () => {
    cy.openHomePage()
  })
  it('Check Boxes', () => {
    navigateTo.toastrPage()
    cy.get('[type="checkbox"]').check({force: true})
    cy.get('[type="checkbox"]').eq(0).click({force: true})
  })
})
