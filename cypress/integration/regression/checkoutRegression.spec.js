describe('Checkout Regression Test', () => {
  it('Deve validar elementos do checkout', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').should('be.visible')
  });
});

