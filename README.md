# 🧪 Cypress Test Suite

### Bem-vindo ao repositório de testes automatizados utilizando Cypress! 🚀

Este projeto contém exemplos de testes de API, testes de UI e estruturas para testes de smoke e regressão, organizado de maneira profissional para facilitar a navegação, manutenção e evolução dos testes.

## 📂 Estrutura de Pastas
##### cypress/
├── e2e/

│   ├── api/

│   │   └── apiExample.cy.js

│   ├── regression/

│   │   └── regressionExample.cy.js

│   ├── smoke/

│   │   └── smokeExample.cy.js

│   └── ui/

│       └── uiExample.cy.js

├── fixtures/

│   └── example.json

├── support/

│   ├── commands.js

│   └── e2e.js


cypress.config.js

package.json


## 🚀 Como rodar o projeto localmente

Clone o repositório git clone https://github.com/fefitti/cypress-test-suite.git
Acesse a pasta do projeto cd cypress-test-suite
Instale as dependências npm install
Execute o Cypressm Com a interface gráfica: npx cypress open Ou em modo headless: npx cypress run

## 🛠 Tecnologias Utilizadas
- Cypress - Framework principal de testes 
- JavaScript 
- Node.js 
- Mocha - Estrutura de execução de testes (já embutida no Cypress)
- Chai - Biblioteca de asserções (já embutida no Cypress)

## 🧹 Tipos de Testes Implementados
🔹 Testes de API (com cy.request)

🔹 Testes de UI (com interação em elementos da tela) 

🔹 Testes de Smoke

🔹 Testes de Regressão

🔹 Testes Automatizados End-to-End

## 📄 Exemplos rápidos 
**API Teste:**

cy.request('GET', '/users').then((response) => { expect(response.status).to.eq(200); }); 

**UI Teste:**

cy.visit('/'); cy.get('h1').should('contain.text', 'Welcome');

## 📝 Observações 
O projeto pode ser expandido facilmente para suportar novos tipos de testes e integrações. A estrutura está pronta para integração com CI/CD (GitHub Actions, GitLab CI, etc). Comandos customizados foram adicionados para reaproveitamento de código.

## 📬 Contato 
Feito com carinho por Fernanda Fittipaldi Santos. 
Quer bater um papo técnico ou discutir ideias de automação? 
Me chama! 🚀 [LinkedIn](https://www.linkedin.com/in/fefitti/ "LinkedIn") |[ Portfólio de Bots](https://sites.google.com/view/botbrisado/home " Portfólio de Bots")

### 🔥 Bora Automatizar o Mundo! 🔥
