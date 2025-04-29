// Importa os comandos customizados antes de cada teste
import './commands';

// Este evento é disparado antes de cada spec
beforeEach(() => {
  cy.log('Iniciando o teste 🚀');
});

// Este evento é disparado após cada spec
afterEach(() => {
  cy.log('Teste finalizado 🎯');
});

