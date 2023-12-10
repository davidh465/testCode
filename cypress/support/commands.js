Cypress.Commands.add('setTotalCount', (count) => {
    cy.log('Setting totalCount:', count);
    Cypress.config('totalCount', count);
  });
  
  Cypress.Commands.add('getTotalCount', () => {
    return Cypress.config('totalCount');
  });
  