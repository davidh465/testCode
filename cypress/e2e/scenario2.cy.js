const { expect } = require('chai');

describe('Scenario 2', () => {
    const user = {
        "firstName": "Test",
        "lastName": "Qa",
        "title": "Lead",
        "role": "CEO"
    }

    it('Scenario 2 – Run report', function () {
        cy.get('.menu-tab-label').contains(' Reports & Settings ').should('exist').and('be.visible').click();
        cy.get('#filter_text').type('Project Profitability').type('{enter}');
        cy.get('#filter_text').type('{enter}');
     
        cy.get('.listViewNameLink', { timeout: 2500 }).contains('Project Profitability').click();
        cy.get('.input-label').contains('Run and Archive').click();
        cy.get('.listViewNameLink').contains('Project Profitability').should('be.visible');
    });
});