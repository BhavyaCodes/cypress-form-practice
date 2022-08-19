/// <reference types="Cypress" />

describe('Test third screen', () => {
  it('Button should be disabled if no option is selected', () => {
    cy.visit('http://localhost:3000');

    //first screen
    cy.get('input[name="firstName"]').type('Bhavya Tomar');
    cy.get('input[name="displayName"]').type('Bhavya');
    cy.get('button').contains('Create workspace', { matchCase: false }).click();

    //second screen
    cy.contains(`Let's set up a home`).should('exist');
    cy.get('input[name="workspaceName"]').type('My workspace');
    cy.get('input[name="workspaceUrl"]').type('some-url');
    cy.get('button').contains('Create workspace', { matchCase: false }).click();

    cy.contains('Create workspace', { matchCase: false })
      .get('button[disabled]')
      .should('exist');
  });
});
