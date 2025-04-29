describe('Stress Test', () => {
  it('Deve fazer múltiplas requisições rapidamente', () => {
    for (let i = 0; i < 10; i++) {
      cy.request('https://jsonplaceholder.typicode.com/posts/1')
    }
  });
});

