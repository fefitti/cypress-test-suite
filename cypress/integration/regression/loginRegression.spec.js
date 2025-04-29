describe('Login Regression Test', () => {
  it('Deve validar login após atualizações', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-email').type('fefitti@example.com')
    cy.get('.action-email').should('have.value', 'fefitti@example.com')
  });
});

