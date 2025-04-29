describe('User API Test', () => {
  it('Deve buscar dados do usuário', () => {
    cy.request('https://jsonplaceholder.typicode.com/users/1')
      .its('body')
      .should('have.property', 'id', 1)
  });
});

