describe('Critical Smoke Test', () => {
  it('Deve validar elementos críticos da página', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').should('exist')
  });
});

