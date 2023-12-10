const { expect } = require('chai');


describe('Remove events from activity log', () => {
    let totalCount,totalCount1
    Cypress.env('totalCount', null);
    const user = {
        "firstName": "Test",
        "lastName": "Qa",
        "title": "Lead",
        "role": "CEO"
    }

    it('Scenario 3 – Remove events', function () {
        cy.get('.menu-tab-label').contains(' Reports & Settings ').should('exist').and('be.visible').click();
        cy.wait(1200)


        cy.get('.column.listview-status.align-left span').eq(1).invoke('text').then((text) => {
         
            Cypress.env('totalCount', text);
            cy.log('Inner Text:', text);
             totalCount = Cypress.env('totalCount');
            cy.log('Total Count part 1:', totalCount)

        });

        cy.get('.input-check').eq(2).click();
        cy.get('.input-check', { timeout: 3000 }).eq(3).click();
        cy.get('.input-check', { timeout: 3000 }).eq(4).click();
        cy.wait(5000)

        cy.get(".input-arrow.select-label", { timeout: 25000 }).eq(0).click();

        cy.get('.option-cell.input-label ', { timeout: 25000 }).contains('Delete').should('exist').click();

        cy.wait(5000)
        cy.get('.column.listview-status.align-left span').eq(1).invoke('text')
            .then((text) => {
                
                Cypress.env('totalCount', text);
                cy.log('Inner Text:', text);
              

                totalCount = parseInt(Cypress.env('totalCount'), 10);
                 totalCount1 = parseInt(Cypress.env('totalCount'), 10);
                expect(totalCount1).to.eq(totalCount - 3);
            });
    });
});