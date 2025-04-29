describe('Auth API Test', () => {
  it('Deve simular autenticação', () => {
    cy.request('https://jsonplaceholder.typicode.com/posts/1')
      .its('status')
      .should('eq', 200)
  });
});

