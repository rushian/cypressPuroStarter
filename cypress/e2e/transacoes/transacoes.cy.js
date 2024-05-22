/// <reference types="cypress" />

describe('Cadastrar nova transacao', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    const dataCompleta = new Date();

    const dia = dataCompleta.getDate();
    const mes = dataCompleta.getMonth() + 1; // Os meses começam do zero, então adicione 1
    const ano = dataCompleta.getFullYear();

    // Formata a data no formato dd/mm/yyyy
    const dataAtual = `${ano}-${mes.toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`;

    it('CT01 - Cadastrar nova transacao - preenchendo todos campos', () => {
      cy.log('Consultoria')
      cy.get('#transaction > .button').click()
      cy.get('#description').type('Consultoria cypress')
      cy.get('#amount').type('2500.00')
      cy.get('#date').type(dataAtual)
      cy.get('button').contains('Salvar').click()

      cy.log('Pagar bolo com café')
      cy.get('#transaction > .button').click()
      cy.get('#description').type('Paga bolo com café')
      cy.get('#amount').type('-80.00')
      cy.get('#date').type(dataAtual)
      cy.get('button').contains('Salvar').click()
    })
  })
  