///<reference types="cypress" />


context('Funcionalidade login', () => {
    

    it('Deve fazer login com sucesso' , () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, aluno_ebac (não é aluno_ebac? Sair)')
        cy.get('.page-title').should('contain', 'Minha conta')



    })

    it('deve exibir uma mensagem de erro ao inserir usuario invalido', () => {

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , 'Erro: O usuário aluno_ebac@teste não está registrado neste site')

    });
    



    it('deve exibir uma mensagem de erro ao inserir senha invalida', () => {

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')




    });


});