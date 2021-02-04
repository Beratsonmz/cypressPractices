/// <reference types ="cypress"/>

//const {constant} = require("cypress/types/lodash")

import {navigateTo} from "../support/PageObjects/NavigationPage";

describe('First Suite', () => {
  beforeEach('open App', () => {
    cy.openHomePage()
  })
  it('First Test', () => {
    navigateTo.formLayoutsPage()

    //by Tag name
    cy.get('input')

    //by ID
    cy.get('#inputEmail1')

    //by Class name
    cy.get('.input-full-width')

    //by Attribute name
    cy.get('[placeholder]')

    //by Attribute name and value
    cy.get('[placeholder="Email"]')

    //by Class Value
    cy.get('[class="input-full-width size-medium shape-rectangle"]')

    //by Tag name and Attribute with value
    cy.get('input[placeholder="Email"]')

    //by Two different attributes
    cy.get('[placeholder="Email"][type="email"]')

    //by Tag name, Attribute with value, ID and Class
    cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

    //The most recommended way by Cypress
    cy.get('[data-cy="imputEmail1"]')
  })

  it("secondTest", () => {
    navigateTo.formLayoutsPage()

    cy.get('[data-cy="signInButton"]')

    cy.contains('Sign in')

    cy.contains('[status="warning"]', 'Sign in')

    cy.get('#inputEmail3')
      .parents('form')
      .find('button')
      .should('contain', 'Sign in')
      .parents('form')
      .find('nb-checkbox')
      .click()

    cy.contains('nb-card', 'Horizontal form').find('[type="email"]')

  })

  it('then and wrap methods', () => {

    navigateTo.formLayoutsPage()

    cy.contains('nb-card', 'Using the Grid').then(firstForm => {
      const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
      const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
      expect(passwordLabelFirst).to.equal('Password')
      expect(emailLabelFirst).to.equal('Email')

      cy.contains('nb-card', 'Basic form').then(secondForm => {
        const passwordLabelSecond = secondForm.find('[for = "exampleInputPassword1"]').text()
        expect(passwordLabelFirst).to.equal(passwordLabelSecond)
        cy.wrap(secondForm).find('[for = "exampleInputPassword1"]').should('contain', 'Password')
      })
    })

  })
  it('invoke command', () => {
    navigateTo.formLayoutsPage()
    //1
   cy.get('[for="exampleInputEmail1"]')
     .should('contain', 'Email address')
     .should('have.class','label')
    //2
    cy.get('[for="exampleInputEmail1"]').then(inputLabel => {
      expect(inputLabel.text()).to.equal('Email address')
      expect(inputLabel).to.have.class('label')
    })
    //3
    cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => {
      expect(text).to.equal('Email address')
    })
    //4

    cy.contains('nb-card', 'Basic form')
      .find('nb-checkbox')
      .click()
      .find('.custom-checkbox')
      .invoke('attr', 'class')
      //.should('contain','checked')
      .then(classValue => {
        expect(classValue).to.contain('checked')
      })
  })

  it('radio button', () => {
    navigateTo.formLayoutsPage()

    cy.contains('nb-card', 'Using the Grid')
      .find('[type="radio"]')
      .then(radioButtons => {
        cy.wrap(radioButtons)
          .first()
          .check({force: true})
          .should('be.checked')

        cy.wrap(radioButtons)
          .eq(1)
          .check({force: true})
          .should('be.checked')

        cy.wrap(radioButtons)
          .first()
          .should('not.be.checked')

        cy.wrap(radioButtons)
          .eq(2)
          .should('be.disabled')
      })
  })
})


