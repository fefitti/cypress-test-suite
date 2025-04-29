// Exemplo de comando customizado para login
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login'); // Ajuste a URL conforme seu sistema
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(password, { log: false });
  cy.get('button[type="submit"]').click();
});

// Exemplo de comando para chamada API simples
Cypress.Commands.add('getUser', (userId) => {
  cy.request({
    method: 'GET',
    url: `/users/${userId}`,
    failOnStatusCode: false
  });
});

