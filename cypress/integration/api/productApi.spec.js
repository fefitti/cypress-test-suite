describe('Product API Test', () => {
  it('Deve validar produto via API', () => {
    cy.request('https://jsonplaceholder.typicode.com/posts')
      .its('status')
      .should('eq', 200)
  });
});

