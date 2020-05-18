/*import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'
addMatchImageSnapshotCommand()*/

Cypress.Commands.add('isVisible',selector => {
    cy.get(selector).should('be.visible')
})

Cypress.Commands.add('isHidden',selector => {
    cy.get(selector).should('not.exist')
})

/*cyprees.commands.add("setResolution",size => {
    if (cypress._.isArray(size)) {
        cy.viewport(size[0],size[1])
    } else {
        cy.viewport(size)
    }
})*/

Cypress.Commands.add('login',(username, password) => {
    cy.get('#login_form').should('be.visible')
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.get('#user_remember_me').click()
    cy.get('input[name="submit"]').click()
})