describe('API Tests', () => {
    let token; // Variável para armazenar o token de autenticação
  
    beforeEach(() => {
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: {
          email: 'camilamildner8@gmail.com',
          password: 'camila2024'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        token = response.body.authorization; // Armazena o token
      });
    });
  
    it('Deve cadastrar um novo usuário', () => {
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        headers: {
          Authorization: token // Adiciona o token nos headers
        },
        body: {
          nome: 'Teste email temporario',
          email: 'yasmeen1284@uorak.com',
          password: 'senha123458',
          administrador: 'true'
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
      });
    });
  
    it('Deve listar os usuários existentes', () => {
      cy.request({
        method: 'GET',
        url: 'https://serverest.dev/usuarios',
        headers: {
          Authorization: token // Adiciona o token nos headers
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('usuarios');
        expect(response.body.usuarios).to.be.an('array'); // Verifica se é um array
        expect(response.body.usuarios.length).to.be.greaterThan(0); // Verifica se há pelo menos um usuário
      });
    });

    it('Deve deletar o usuário Mr. Ron Gulgowski pelo ID', () => {
        const userId = 'AfRIKWdTUlkxZx0'; // ID do usuário 
    
        cy.request({
          method: 'DELETE',
          url: `https://serverest.dev/usuarios/${userId}`,
          headers: {
            Authorization: token // Adiciona o token nos headers
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
    });

    