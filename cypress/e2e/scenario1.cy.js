const { expect } = require('chai');

describe('login Test', () => {
    const user = {
        "firstName": "Test",
        "lastName": "Qa",
        "title": "Lead",
        "role": "CEO"
    }

    // login 
    beforeEach('login', function () {

        cy.visit('/', { failOnStatusCode: false });
        cy.get('#login_user').should('exist').and('be.visible').type(Cypress.env('username'));
        cy.get('#login_pass').should('exist').and('be.visible').type(Cypress.env('password'));
        cy.get('#login_button').click();
    });

    // clean up user
    after(() => {
        cy.get('#DetailForm_delete').should('be.visible').click();
    })
    // create user
    it('Scenario 1 – Create contact', function () {
        cy.get('.menu-tab-label').contains(' Sales & Marketing ').should('exist').and('be.visible').click();
        cy.get('.input-icon.theme-icon.create-Contact').should('exist').and('be.visible').click();


        cy.get('input[name="first_name"]').should('exist').and('be.visible').type(user.firstName);
        cy.get('input[name="last_name"]').should('exist').and('be.visible').type(user.lastName);

        cy.get('[aria-label="Category"]:contains("(none)")')
            .click()
            .then(() => {
                cy.get('.option-cell.input-label ', { timeout: 25000 }).contains('Customers').should('be.visible').click();
            });

        cy.get('.option-cell.input-label ', { timeout: 25000 }).contains('Customers')
            .then(() => {
                cy.get('.option-cell.input-label ', { timeout: 25000 }).contains('Suppliers').should('exist').click();

            });
        cy.get('#DetailForm_save2', { timeout: 25000 }).should('exist').click();

        cy.get('.summary-header').should('include.text', 'Test Qa');
    });
});