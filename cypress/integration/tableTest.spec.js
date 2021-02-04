import {navigateTo} from "../support/PageObjects/NavigationPage";

describe('First Suite', () => {
  beforeEach('open App', () => {
    cy.openHomePage()
  })
  it('Web Table', () => {
    navigateTo.smartTablePage()


    cy.get('thead').find('.nb-plus').click()
    cy.get('thead').find('tr').eq(2).then(tableRow => {
      cy.wrap(tableRow).find('[placeholder="ID"]').type('10')
      cy.wrap(tableRow).find('[placeholder="First Name"]').type('Berat')
      cy.wrap(tableRow).find('[placeholder="Last Name"]').type('Sönmez')
      cy.wrap(tableRow).find('[placeholder="Username"]').type('Beratsonmz')
      cy.wrap(tableRow).find('[placeholder="E-mail"]').type('abc@mail.com')
      cy.wrap(tableRow).find('[placeholder="Age"]').type('25')
      cy.wrap(tableRow).find('.nb-checkmark').click()
    })
    cy.get('tbody').contains('tr', 'Berat').then(tableRow => {
      cy.wrap(tableRow).find('td').eq(6).should('contain', 25)
      cy.wrap(tableRow).find('td').eq(5).should('contain', 'abc@mail.com')
      cy.wrap(tableRow).find('td').eq(4).should('contain', 'Beratsonmz')
      cy.wrap(tableRow).find('td').eq(3).should('contain', 'Sönmez')
      cy.wrap(tableRow).find('td').eq(2).should('contain', 'Berat')
      cy.wrap(tableRow).find('td').eq(1).should('contain', 10)
    })


    const age = [20, 30, 40, 200]

    cy.wrap(age).each(age => {
      cy.get('thead [placeholder="Age"]').clear().type(age)
      cy.wait(500)
      cy.get('tbody tr').each(tableRow => {
        if (age == 200) {
          cy.wrap(tableRow).should('contain', 'No data found')
        } else {
          cy.wrap(tableRow).find('td').eq(6).should('contain', age)
        }
      })
    })

  })
})
