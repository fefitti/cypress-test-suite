describe('Teste de Login', () => {
  it('Deve realizar login com sucesso', () => {
    cy.visit('https://exemplo.com/login')

    cy.get('input[name="email"]').type('usuario@teste.com')
    cy.get('input[name="password"]').type('senhaSegura123')
    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/dashboard')
    cy.contains('Bem-vindo').should('be.visible')
  })
})
