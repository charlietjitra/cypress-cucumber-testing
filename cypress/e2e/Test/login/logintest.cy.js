/// <reference types="cypress" />
import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open the login page', () => {
  cy.visit('/auth/login');
});

Then('I should see the login form', () => {
  cy.get('form').should('be.visible');
  cy.get('input[name="username"]').should('exist');
  cy.get('input[name="password"]').should('exist');
  cy.contains('button', 'Login').should('exist');
});

Then('I can logged in', () => {
    cy.get('input[name=username]').type("test@test.com");
    cy.get('input[name=password]').type("123");
    cy.get('button').click();
});

Then("I should be directed to homepage", () => {
    cy.url().should('eq' , "http://localhost:3000/");
})
