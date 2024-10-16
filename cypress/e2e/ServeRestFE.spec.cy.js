// TESTES FRONTEND

describe('Frontend Tests', () => {
  before(() => {
    // Acessa a URL do site
    cy.visit('https://front.serverest.dev/');

    // Preenche o campo de email
    cy.get('input#email').type('camilamildner8@gmail.com');

    // Preenche o campo de senha
    cy.get('input#password').type('camila2024');

    // Clica no botão de login
    cy.get('div#root button[type="submit"]').click();

    // Valida que o login foi bem-sucedido
    cy.url().should('eq', 'https://front.serverest.dev/home');
  });

  it('Deve visualizar detalhes do produto Logitech MX Vertical', () => {
    // Clica para visualizar os detalhes do produto
    cy.get('div#root div:nth-child(12) > div > div > a:nth-child(1) > a').click();

    // Verifica se a URL é a esperada
    cy.url().should('eq', 'https://front.serverest.dev/detalhesProduto/BeeJh5lz3k6kSIzA');
    cy.wait(3000); // Espera 3 segundos

    // Valida a presença do produto Logitech MX Vertical na página de detalhes
    cy.get('div#root div:nth-child(2) > h2').should('be.visible');

    // Adicionar o produto à lista
  cy.get('div#root a > button[type="button"]').click();

  // Valida que a página "Minha Lista de Produtos" foi carregada
  cy.visit('https://front.serverest.dev/minhaListaDeProdutos');

  // Adicionar no carrinho
  cy.get('div#root a:nth-child(3) > button[type="button"]').click();

  // Valida que a página do carrinho foi carregada
  cy.visit('https://front.serverest.dev/carrinho');
  cy.wait(3000); // Espera 3 segundos para a página carregar

  // Clica no botão de Logout
  cy.get('div#navbarTogglerDemo01 button[type="button"]').click();

  });
});
