import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";

Given("I am on the registration page", () => {
    cy.visit("/auth/register");
});

When('I fill in the registration form with valid details', () => {
    cy.get('input[name="fname"]').type('new1'); 
    cy.get('input[name="lname"]').type('new2'); 
    cy.get('input[name="username"]').type('newTest@test.com'); 
    cy.get('input[name="password"]').type('123'); 
});

When('I submit the registration form', () => {
    cy.get('form').submit(); // Adjust this if necessary
  });

Then('I should be redirected to the homepage', () => {
    cy.url().should('eq', 'http://localhost:3000/'); 
});

And('I can log in using the new user', () => {
    cy.visit('/auth/login/')
    cy.get('input[name="username"]').type('newTest@test.com'); 
    cy.get('input[name="password"]').type('123'); 
    cy.get('button').click();
})