/// <reference types="Cypress" />

describe('Check form validation on first screen', () => {
  it('Should not accept @Bhavya Tomar as valid first name input', () => {
    cy.visit('http://localhost:3000');

    cy.get('input[name="firstName"]').type('@Bhavya Tomar');
    cy.get('input[name="displayName"]').type('Bhavya');
    cy.get('button').contains('Create workspace', { matchCase: false }).click();
    cy.contains('Invalid Input', { matchCase: false }).should('exist');
    cy.contains(`Let's set up a home`).should('not.exist');
  });

  it('Should not accept Bha  vya as valid display name input', () => {
    cy.visit('http://localhost:3000');

    cy.get('input[name="firstName"]').type('Bhavya Tomar');
    cy.get('input[name="displayName"]').type('Bha  vya');
    cy.get('button').contains('Create workspace', { matchCase: false }).click();
    cy.contains('Invalid username', { matchCase: false }).should('exist');
    cy.contains(`Let's set up a home`).should('not.exist');
  });
});
