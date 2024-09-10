/// <reference types="cypress" />
import { Given, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I login into the page", () => {
    cy.visit('/auth/login');
    cy.get('input[name=username]').type("test@test.com");
    cy.get('input[name=password]').type("123");
    cy.get('button').click();
});

And('I fill in the title with "test" and content with "shit"', () => {
    cy.get('button.create').click();
    cy.get('input[name="title"]').type("test");
    cy.get('textarea[name="content"]').type("shit"); 
    cy.get('button[type="submit"]').click();
});

Then('the response should replace "fuck" with "****"', () => {
    cy.contains('p', '****').should('exist');
})