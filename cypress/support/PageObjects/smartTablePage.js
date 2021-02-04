export class SmartTablePage {

  updateAgeByFirstName(name, age) {
    cy.get('tbody').contains('tr', name).then(tableRow => {
      cy.wrap(tableRow).find('.nb-edit').click()
      cy.wrap(tableRow).find('[placeholder="Age"]').clear().type(age)
      cy.wrap(tableRow).find('.nb-checkmark').click()
      cy.wrap(tableRow).find('td').eq(6).should('contain', age)
    })
  }

  addNewFakeRecord() {
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
  }
  deleteRowByIndex(index){
    const stub = cy.stub()
     cy.on('window:confirm', stub)
     cy.get('tbody tr').eq(index).find('.nb-trash').click().then(() => {
       expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
     })
  }
}

export const onSmartTablePage = new SmartTablePage()
