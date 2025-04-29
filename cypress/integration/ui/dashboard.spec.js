describe('Dashboard UI Test', () => {
  it('Deve acessar o Dashboard', () => {
    cy.visit('https://example.cypress.io/commands/navigation')
    cy.contains('Navigation').should('exist')
  });
});

