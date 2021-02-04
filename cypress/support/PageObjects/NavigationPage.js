function selectGroupMenuItems(groupName) {
  cy.contains('a', groupName).then(menu => {
    cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then(attr => {
      if (attr.includes('left')) {
        cy.wrap(menu).click()
      }
    })
  })
}

export class NavigationPage {

  formLayoutsPage() {
    selectGroupMenuItems('Form')
    cy.contains('Form Layouts').click()
  }
  datepickerPage() {
    selectGroupMenuItems('Form')
    cy.contains('Datepicker').click()
  }
  toastrPage(){
    selectGroupMenuItems('Modal & Overlays')
    cy.contains('Toastr').click()
  }
  smartTablePage(){
    selectGroupMenuItems('Tables & Data')
    cy.contains('Smart Table').click()
  }
  tooltipPage(){
    selectGroupMenuItems('Modal & Overlays')
    cy.contains('Tooltip').click()
  }

}

export const navigateTo = new NavigationPage()
