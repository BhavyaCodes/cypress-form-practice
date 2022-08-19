/// <reference types="Cypress" />

describe('Test full form flow with happy run', () => {
  it('Should be able to submit a successful submission', () => {
    cy.visit(Cypress.env()['WEBSITE_URL']);

    //first screen
    cy.get('input[name="firstName"]').type('Bhavya Tomar');
    cy.get('input[name="displayName"]').type('Bhavya');
    cy.get('button').contains('Create workspace', { matchCase: false }).click();

    //second screen
    cy.contains(`Let's set up a home`).should('exist');
    cy.get('input[name="workspaceName"]').type('My workspace');
    cy.get('input[name="workspaceUrl"]').type('some-url');
    cy.get('button').contains('Create workspace', { matchCase: false }).click();

    //third screen
    cy.contains(`How are you planning`).should('exist');
    cy.get('.MuiGrid-container > :nth-child(1) > .MuiBox-root').click();
    cy.get('button').contains('Create workspace', { matchCase: false }).click();

    //fourth screen
    cy.contains(`Congratulations`).should('exist');
  });
});
