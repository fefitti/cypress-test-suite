const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://example.cypress.io', // 👉 Aqui você pode mudar depois para a URL do seu sistema
    setupNodeEvents(on, config) {
      // Implementação de eventos Node.js para o Cypress, se precisar.
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Padrão de localização dos testes
    supportFile: 'cypress/support/e2e.js', // Arquivo de suporte para comandos customizados
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    defaultCommandTimeout: 10000, // 10 segundos de timeout padrão para comandos
    pageLoadTimeout: 60000, // 60 segundos para carregamento de páginas
    viewportWidth: 1280,
    viewportHeight: 720
  }
});

