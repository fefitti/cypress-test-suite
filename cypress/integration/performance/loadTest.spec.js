describe('Load Test', () => {
  it('Deve medir tempo de resposta da página', () => {
    const start = Date.now();
    cy.visit('https://example.cypress.io').then(() => {
      const duration = Date.now() - start;
      expect(duration).to.be.lessThan(5000) // Página deve carregar em até 5 segundos
    });
  });
});

