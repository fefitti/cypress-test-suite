describe('Checkout UI Test', () => {
  it('Deve simular um checkout', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').should('be.visible')
  });
});

