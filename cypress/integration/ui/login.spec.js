describe('Login UI Test', () => {
  it('Deve fazer login com sucesso', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email')
      .type('fefitti@example.com')
      .should('have.value', 'fefitti@example.com')
  });
});

