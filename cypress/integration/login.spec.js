/// <reference types="cypress" />

describe('renders login page', () => {
    it('login and search for bitcoin', () => {
      cy.visit('/stock-market-dashboard/');

      cy.get('[type=""]')
        .type('test@gmail.com')
        .should('have.value', 'test@gmail.com');
      cy.get('[type="password"]').type('123456').should('have.value', '123456');
      cy.get('.sc-cNKqjZ').click();
      cy.get(
        '[data-testid="search-element"] > .MuiInputBase-root > .MuiInputBase-input'
      )
        .type('bitcoin')
        .should('have.value', 'bitcoin');
    });
  it('register successfully', () => {
    cy.visit('/stock-market-dashboard/');
    cy.get('.sc-hUpaCq').click();
    cy.get('[placeholder="First Name"]').type('Test').should('have.value', 'Test');
    cy.get('[placeholder="Last Name"]').type('Tests').should('have.value', 'Tests');
    cy.get('[type="email"]').type(`test${Math.random()}@gmail.com`);
    cy.get('[placeholder="Password"]').type('123456').should('have.value', '123456');
    cy.get('[placeholder="Confirm Password"]')
      .type('123456')
      .should('have.value', '123456');
    cy.get('.sc-cNKqjZ').click();
    cy.get('.sc-eCImPb').should('contain', 'Registration Completed Successfully!');
  });
});
