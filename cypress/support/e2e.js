// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// logs in befte each test

beforeEach('login', function () {
    cy.visit('/', { failOnStatusCode: false });
    cy.get('#login_user').should('exist').and('be.visible').type(Cypress.env('username'));
    cy.get('#login_pass').should('exist').and('be.visible').type(Cypress.env('password'));
    cy.get('#login_button').click();
});


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});