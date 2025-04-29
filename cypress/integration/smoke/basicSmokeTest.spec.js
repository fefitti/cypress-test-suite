describe('Basic Smoke Test', () => {
  it('Deve validar que o site carrega', () => {
    cy.visit('https://example.cypress.io')
    cy.title().should('include', 'Cypress')
  });
});

